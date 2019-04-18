import React, { Fragment } from 'react'

// Local
import BaseTemplate from '../components/shared/BaseTemplate'
import DiagonalBg from '../components/shared/DiagonalBg'
import Space from '../components/shared/Space'

// Sections
import BlogPostCard, { BlogPostCardProps } from '../components/Blog/BlogPostCard'
import HeroPostSection from '../components/Blog/HeroPostSection'
import Subscribe from '../components/Blog/Subscribe'
import { Grid, GridItem } from '../components/Blog/Grid'
import Footer from '../components/shared/Footer'
import Header from '../components/Blog/Header'

type AllQuery<T> = Readonly<{ edges: { node: T }[] }>
type BlogProps = { data: { allPosts: AllQuery<BlogPostCardProps> } }

const primaryLight4 = (p: any) => p.theme.primaryLight4

const Blog = ({ data: { allPosts } }: BlogProps) => {
  const [{ node: featured }, ...posts] = allPosts.edges
  return (
    <BaseTemplate title="Prisma Blog">
      <Fragment>
        <DiagonalBg height={2900} top={-660} topOnMobile={-700} diagonalBg={primaryLight4}>
          <Header />
          <Space height={95} heightOnMobile={56} />
          <BlogPostCard {...featured} component={HeroPostSection} />
          <Subscribe />
        </DiagonalBg>
        <Grid>
          {posts.map(({ node: post }) => (
            <GridItem>
              <BlogPostCard {...post} key={post.fields.slug} />
            </GridItem>
          ))}
        </Grid>
        <Space height={112} heightOnMobile={48} />
        <Footer />
      </Fragment>
    </BaseTemplate>
  )
}

export default Blog