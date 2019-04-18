import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from './MDXRenderer'
import PostCard from './PostCard'
import HeroPostSection from './HeroPostSection'

// this components handles a graphql post node, and renders mdx inside it
// "component" prop compatibility: PostCard | HeroPostSection

type MdxResource = { code: string }

export type BlogPostCardInternalProps = {
  date: string
  title: React.ReactNode
  abstract: React.ReactNode
  image: string
  alt?: string | null
  href: string
}

export type BlogPostCardProps = {
  frontmatter: { heroImage: string; heroImageAlt?: string } & { metaImage: string }
  fields: { date: string; slug: string; title: MdxResource; abstract: MdxResource }
  component: typeof PostCard | typeof HeroPostSection
  renderer: typeof MDXRenderer
}

export const query = graphql`
  fragment BlogPostCard on Mdx {
    frontmatter {
      heroImage
      metaImage
    }
    fields {
      date(formatString: "MMMM DD, YYYY")
      slug
      title {
        code
      }
      abstract {
        code
      }
    }
  }
`

const BlogPostCard = ({ fields, frontmatter, ...props }: BlogPostCardProps) => {
  const Component = props.component || PostCard
  const Renderer = props.renderer || MDXRenderer

  const { date, title, abstract, slug } = fields
  const { heroImage, metaImage, heroImageAlt } = frontmatter

  return (
    <Component
      date={date}
      title={<Renderer type="title">{title.code}</Renderer>}
      abstract={<Renderer>{abstract.code}</Renderer>}
      image={metaImage || heroImage}
      alt={(heroImage && heroImageAlt) || undefined}
      href={slug}
    />
  )
}

export default BlogPostCard
