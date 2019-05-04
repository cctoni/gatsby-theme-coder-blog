import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/CustomBio'

import SmallBio from '../components/SmallCustomBio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img
          src={post.frontmatter.banner}
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '50vw',
          }}
        />
        <div
          style={{
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            <h1>{post.frontmatter.title}</h1>
            <SmallBio
              author={post.frontmatter.author}
              piclink={post.frontmatter.piclink}
              date={post.frontmatter.date}
              readingTime={`${post.timeToRead} Min Read`}
            />
          </p>
          <MDXRenderer>{post.code.body}</MDXRenderer>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio
            author={post.frontmatter.author}
            twitter={post.frontmatter.twitter}
            piclink={post.frontmatter.piclink}
            bio={post.frontmatter.bio}
            orgaName={post.frontmatter.orgaName}
            orgaPicLink={post.frontmatter.orgaPicLink}
            orgaBio={post.frontmatter.orgaBio}
            orgaTwitter={post.frontmatter.orgaTwitter}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 140)
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD")
        author
        twitter
        piclink
        bio
        orgaName
        orgaPicLink
        orgaTwitter
        orgaBio
        banner
      }
      code {
        body
      }
    }
  }
`
