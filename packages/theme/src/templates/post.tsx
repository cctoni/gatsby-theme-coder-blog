import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import { MdxPostNode } from '../types'
import withRouter, { WithRouterProp } from '../utils/withRouter'
import BaseTemplate from '../components/shared/BaseTemplate'
import SocialMeta from '../components/shared/SocialMeta'
import HybridNav from '../components/shared/Nav/HybridNav'
import Footer from '../components/shared/Footer'
import MDXRenderer from '../components/Blog/Post/MDXRenderer'
import Header from '../components/Blog/Post/Header'
import Subscribe from '../components/Blog/Subscribe'
import RecentPosts from '../components/Blog/Post/RecentPosts'
import { Container, Article } from '../components/Blog/Post/styles'

type PostProps = { data: { mdx: MdxPostNode } } & WithRouterProp

const Post = ({ data: { mdx }, router }: PostProps) => {
  const { date, title, abstract, series, indexInSeries } = mdx.fields
  const { heroImage, metaImage, heroImageAlt, video, authors, spectrum } = mdx.frontmatter
  const metaOrHero = metaImage || heroImage
  const basename = 'https://www.prisma.io/blog/' // [TODO]: make this a env variable
  const url = router.pathname.replace(/^\//, basename)
  const image = metaOrHero && metaOrHero.replace(/^\//, basename)

  return (
    <BaseTemplate title={title.text}>
      <Fragment>
        <SocialMeta
          title={`${title.text} | Prisma`}
          image={image}
          description={abstract.text}
          type="article"
          video={video || null}
          url={url}
        />
        <HybridNav color="dark" sidePadding={20} />

        <Article>
          <Header
            date={date}
            series={series}
            indexInSeries={indexInSeries}
            title={title.code && <MDXRenderer type="title">{title.code}</MDXRenderer>}
            titleText={title.text}
            url={url}
            interaction={true}
            spectrum={spectrum}
            authors={authors}
            abstract={abstract.code && <MDXRenderer>{abstract.code}</MDXRenderer>}
            heroImage={heroImage}
            heroImageAlt={heroImageAlt}
          />
          <Container>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </Container>
        </Article>

        <Subscribe />
        <RecentPosts />

        <Footer />
      </Fragment>
    </BaseTemplate>
  )
}

export default withRouter(Post)
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        date(formatString: "MMMM DD, YYYY")
        title {
          code
          text
        }
        abstract {
          code
          text
        }
        indexInSeries
        series {
          ...PostSeriesListing
        }
      }
      frontmatter {
        heroImage
        metaImage
        spectrum
        authors {
          ...AuthorMeta
        }
      }
      code {
        body
      }
    }
  }
`
