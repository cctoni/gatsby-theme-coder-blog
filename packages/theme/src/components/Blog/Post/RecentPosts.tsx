import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Sections
import { Space } from '../../shared/Space'
import { Grid, GridItem } from '../Grid'
import BlogPostCard, { BlogPostCardProps } from '../BlogPostCard'

type AllQuery<T> = Readonly<{ edges: { node: T }[] }>
type RecentHook = AllQuery<BlogPostCardProps>

const recentPosts = graphql`
  {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { glob: "**/posts/*.mdx" }
        frontmatter: { alias: { regex: "/^\\\\S{5,}$/" }, hidden: { ne: true } }
      }
      limit: 3
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

export default () => {
  const { edges: posts }: RecentHook = useStaticQuery(recentPosts).posts
  return (
    <>
      <Grid>
        {posts.map(({ node: post }) => (
          <GridItem>
            <BlogPostCard {...post} key={post.fields.slug} />
          </GridItem>
        ))}
      </Grid>
      <Space height={64} heightOnMobile={32} />
    </>
  )
}
