module.exports = {
  siteMetadata: {
    title: "Prisma",
    description: "Prisma",
    author: "Prisma"
  },
  mapping: {
    "Mdx.frontmatter.authors": "AuthorData.username",
    "Mdx.frontmatter.parts": "Mdx.frontmatter.alias"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: `./posts` }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "series", path: `./series` }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-74131346-14",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "cr2825gz",
        include_in_development: true
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-mdx",
    "gatsby-plugin-nprogress",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-polished",
    "gatsby-plugin-remove-trailing-slashes"
    // 'gatsby-plugin-netlify',
  ]
};

if (process.env.DEPLOY_URL)
  module.exports.assetPrefix = `${process.env.DEPLOY_URL}/blog-assets`;
