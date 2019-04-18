import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from 'graphql-hooks'
import Badge from './Badge'
import { mobile } from '../../../../utils/styles/media'

// this is here for nicer IDE tooling
const gql = (string: TemplateStringsArray) => string.toString()

const POST_STATS_QUERY = gql`
  query PostStats($threadId: ID!) {
    spectrum: spectrumBlogPostInteraction(threadId: $threadId) {
      url
      totalCount
    }
  }
`

const usePostStats = (threadId: string) => useQuery(POST_STATS_QUERY, { variables: { threadId } })

const WrapperGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1rem;
`

const Text = styled.div`
  text-align: right;
  font-weight: 600;
  color: ${p => p.theme.primaryLight2};
  ${mobile(
    css`
      display: none;
    `,
  )}
`

type InteractionWidgetProps = { url: string; title?: string; spectrum?: string }

const getTwitterUrl = ({ url = '', title = '' }: InteractionWidgetProps) => {
  const status = encodeURIComponent(`${title}\n${url}`.trim())
  return `https://twitter.com/home?status=${status}`
}

const InteractionWidget = ({ url, title, spectrum }: InteractionWidgetProps) => {
  // [TODO]: figure out a way of making it a conditional query
  const { data = {} } = usePostStats(spectrum || 'no-post-uuid')
  return (
    <WrapperGrid>
      <Text>
        Join the
        <br />
        discussion
      </Text>
      <Badge type="twitter" url={getTwitterUrl({ title, url })} />
      {data.spectrum && <Badge type="spectrum" {...data.spectrum} />}
    </WrapperGrid>
  )
}

export default InteractionWidget
