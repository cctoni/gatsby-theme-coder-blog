const { resolve } = require("path");
const { readFileSync } = require("fs");
const path = require("path");
const onCreatePostNode = require("./gatsby/on-create-post-node");
const onCreateSeriesNode = require("./gatsby/on-create-series-node");

// some code from: https://github.com/rwieruch/gatsby-mdx-blog-starter-project
const createPostPage = ({ createPage, createRedirect }, post) => {
  const slug = post.fields.slug;
  const alias = post.frontmatter.alias;
  const component = resolve(path.join(__dirname, "./src/templates/post.tsx"));

  createPage({ path: slug, component, context: { id: post.id, alias } });
  createRedirect({ fromPath: `/blog/${alias}`, toPath: slug, force: true });
};

const createSeriesPage = ({ createPage, createRedirect }, series) => {
  const slug = series.fields.slug;
  const alias = series.frontmatter.alias;
  const component = resolve(path.join(__dirname, "./src/templates/series.tsx"));

  createPage({ path: slug, component, context: { id: series.id, alias } });
  createRedirect({ fromPath: `/blog/${alias}`, toPath: slug, force: true });
};

const getEdgeNodeChildMdxId = edge => {
  if (!edge || !edge.node) return;
  if (!edge.node.childMdx) return;
  return edge.node.childMdx.id;
};

exports.onPreBootstrap = () => {
  console.log("\n\n=== <ENV> ===\n\n");
  console.log(JSON.stringify(process.env, null, 2));
  console.log("\n\n=== </ENV> ===\n\n");
  if (
    process.env.NODE_ENV !== "development" &&
    !require("./gatsby-config").assetPrefix
  ) {
    throw new Error(
      "build needs assetPrefix!\nprovide DEPLOY_URL environment variable"
    );
  }
};

exports.createPages = async ({ actions, graphql, getNode }) => {
  const { data, errors } = await graphql(`
    query {
      postFiles: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        edges {
          node {
            relativePath
            childMdx {
              id
            }
          }
        }
      }
      seriesFiles: allFile(filter: { sourceInstanceName: { eq: "series" } }) {
        edges {
          node {
            relativePath
            childMdx {
              id
            }
          }
        }
      }
    }
  `);

  if (errors) throw errors;

  const postIds = data.postFiles.edges
    .map(getEdgeNodeChildMdxId)
    .filter(a => a);
  postIds.forEach(mdxId => createPostPage(actions, getNode(mdxId)));

  const seriesIds = data.seriesFiles.edges
    .map(getEdgeNodeChildMdxId)
    .filter(a => a);
  seriesIds.forEach(mdxId => createSeriesPage(actions, getNode(mdxId)));
};

exports.onCreateNode = input => {
  if (input.node.internal.type === "Mdx") {
    const parent = input.getNode(input.node.parent);
    if (parent.sourceInstanceName === "posts")
      return onCreatePostNode(input, parent);
    if (parent.sourceInstanceName === "series")
      return onCreateSeriesNode(input, parent);
  }
};

exports.sourceNodes = ({
  createNodeId,
  createContentDigest,
  actions: { createNode }
}) => {
  const authors = JSON.parse(readFileSync(resolve("./authors.json")));
  Object.entries(authors).forEach(([username, data]) => {
    if (typeof data.name !== "string" || !data.name) return;
    const id = createNodeId(`author-${username}`);
    const internal = {
      type: "AuthorData",
      contentDigest: createContentDigest(data)
    };
    createNode(Object.assign({}, data, { username, id, internal }));
  });
};
