import React, { useEffect } from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import withRouter, { WithRouterProp } from '../utils/withRouter'
import BaseTemplate from '../components/shared/BaseTemplate'
import ErrorPage from '../components/shared/ErrorPage'

const aliasQuery = graphql`
  {
    allSitePage(filter: { context: { alias: { glob: "*" } } }) {
      edges {
        node {
          context {
            alias
          }
          path
        }
      }
    }
  }
`

type PageNode = { context: { alias: string }; path: string }
type AllQuery<T> = Readonly<{ edges: { node: T }[] }>
type AllPagesHook = AllQuery<PageNode>

const useRedirect = (pathname: string) => {
  const { edges }: AllPagesHook = useStaticQuery(aliasQuery).allSitePage
  useEffect(() => {
    const alias = pathname.replace(/^.*?\/?([^-/]+)\/?$/, '$1')
    const page = edges.find(({ node }) => node.context.alias.endsWith(alias))
    const match = page && page.node && page.node.path
    console.log({ alias, page, pathname, match })
    if (match) navigate(match)
  }, [edges, pathname])
}

const NotFoundPage = ({ router }: WithRouterProp) => {
  useRedirect(router.pathname)
  return (
    <BaseTemplate title="Not found | Prisma">
      <ErrorPage statusCode={404} />
    </BaseTemplate>
  )
}

export default withRouter(NotFoundPage)
