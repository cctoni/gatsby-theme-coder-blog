const { map } = require("ramda");
const extractMdxContent = require("./utils/extract-mdx-content");

const extractPostMetadata = ({ mdxast }) =>
  map(options => extractMdxContent(options)(mdxast), {
    title: { component: "PostTitle" },
    abstract: { component: "Abstract" }
  });

module.exports = ({ node, actions }, { relativePath }) => {
  const name = relativePath.replace(/^(?:\d+-){3}(.+)\.mdx?/, "/blog/$1");
  const date = new Date((relativePath.match(/(\d{4}-\d{2}-\d{2})/) || [])[1]);

  if (isNaN(+date))
    throw new Error(`${relativePath}: invalid post date prefix`);

  if (!node.mdxast) throw new Error(`${relativePath}: post must not be empty`);
  if (!node.frontmatter)
    throw new Error(`${relativePath}: post must contain frontmatter`);
  if (!node.frontmatter.alias)
    throw new Error(`${relativePath}: post must contain alias`);
  if (!node.frontmatter.heroImage && !node.frontmatter.metaImage)
    console.warn(
      `${node.frontmatter.alias} - ${relativePath}: 'missing metaImage!'`
    );

  const slug = `${name}-${node.frontmatter.alias}`;
  const { title, abstract } = extractPostMetadata(node);

  actions.createNodeField({ node, name: "slug", value: slug });
  actions.createNodeField({ node, name: "date", value: date });
  actions.createNodeField({ node, name: "title", value: title });
  actions.createNodeField({ node, name: "abstract", value: abstract });
};
