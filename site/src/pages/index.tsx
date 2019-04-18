import Page from 'gatsby-theme-coder-blog/src/pages/blog';
import { graphql } from 'gatsby'

export default Page
export const pageQuery = graphql`
  {
    allPosts: allMdx(
      filter: {
        fileAbsolutePath: { glob: "**/posts/*.mdx" }
        frontmatter: { alias: { regex: "/^\\\\S{5,}$/" }, hidden: { ne: true } }
      }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          ...BlogPostCard
        }
      }
    }
  }
`

