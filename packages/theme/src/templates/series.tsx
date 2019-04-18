import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import { MdxSeriesNode } from '../types'
import withRouter, { WithRouterProp } from '../utils/withRouter'
import BaseTemplate from '../components/shared/BaseTemplate'
import SocialMeta from '../components/shared/SocialMeta'
import HybridNav from '../components/shared/Nav/HybridNav'
import Footer from '../components/shared/Footer'
import MDXRenderer from '../components/Blog/Post/MDXRenderer'
import Header from '../components/Blog/Post/Header'
import Subscribe from '../components/Blog/Subscribe'
import RecentPosts from '../components/Blog/Post/RecentPosts'
import { Article } from '../components/Blog/Post/styles'

type PostProps = { data: { mdx: MdxSeriesNode } } & WithRouterProp

const SeriesPage = ({ data: { mdx }, router }: PostProps) => {
  const { title } = mdx.frontmatter
  const basename = 'https://www.prisma.io/blog/' // [TODO]: make this a env variable
  const url = router.pathname.replace(/^\//, basename)

  return (
    <BaseTemplate title={title}>
      <Fragment>
        <SocialMeta
          title={`${title} | Prisma`}
          type="article"
          url={router.pathname.replace(/^\//, basename)}
          video={null}
        />
        <HybridNav color="dark" sidePadding={20} />

        <Article>
          <Header
            title={title}
            titleText={title}
            url={url}
            abstract={mdx.code && <MDXRenderer>{mdx.code.body}</MDXRenderer>}
            series={mdx}
          />
        </Article>

        <Subscribe />
        <RecentPosts />

        <Footer />
      </Fragment>
    </BaseTemplate>
  )
}

export default withRouter(SeriesPage)
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
      ...SeriesIndexListing
    }
  }
`
