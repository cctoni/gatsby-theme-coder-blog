import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { MdxSeriesNode, MdxPostNode } from '../../types'
import MDXRenderer from './MDXRenderer'
import Badge from './../shared/Badge'
import { mobile } from '../../utils/styles/media'

type SeriesListingProps = { series: MdxSeriesNode; index?: number } & React.ComponentPropsWithoutRef<typeof Wrapper>

const compareIndexInSeries = (a: MdxPostNode, b: MdxPostNode) =>
  (a.fields.indexInSeries || 0) - (b.fields.indexInSeries || 0)

const SeriesListing = ({ series, index, ...props }: SeriesListingProps) => (
  <Wrapper {...props}>
    {(series.frontmatter.parts || []).sort(compareIndexInSeries).map(node => {
      const { metaImage, heroImage, heroImageAlt } = node.frontmatter
      const { indexInSeries = 0, slug, title } = node.fields
      const image = metaImage || heroImage
      const isSeriesPage = typeof index !== 'number'
      const isCurrentPost = !isSeriesPage && indexInSeries === index
      const badgeBg = isCurrentPost ? 'primaryLight2' : 'blue'

      return (
        <PostWrapper key={slug} to={slug} isCurrent={isCurrentPost}>
          {isSeriesPage && image && <PostImage src={image} alt={heroImage && heroImageAlt} />}
          <FlexColumn>
            <BadgeRow>
              <Badge bg={p => p.theme[badgeBg]}>Part {indexInSeries + 1}</Badge>{' '}
              {isCurrentPost && <div>(Currently reading)</div>}
            </BadgeRow>
            <TitleRow>
              <TitleLineRenderer type="title">{title.code}</TitleLineRenderer>
              <ArrowIcon visible={!isCurrentPost} />
            </TitleRow>
          </FlexColumn>
        </PostWrapper>
      )
    })}
  </Wrapper>
)
export default SeriesListing

// GraphQL Fragments
export const query = graphql`
  fragment PostSeriesListing on Mdx {
    fields {
      slug
    }
    frontmatter {
      parts {
        frontmatter {
          alias
        }
        fields {
          slug
          indexInSeries
          title {
            code
          }
        }
      }
    }
  }

  fragment SeriesIndexListing on Mdx {
    ...PostSeriesListing
    frontmatter {
      parts {
        frontmatter {
          metaImage
          heroImage
        }
      }
    }
  }
`

// styles

const spacing = '1.25rem 0 1.5rem'

const Wrapper = styled.div`
  margin: 1rem 0;
`

const PostWrapperLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${p => p.theme.primaryDark1};
`

const PostWrapperDiv = PostWrapperLink.withComponent('div').extend`
  color: ${p => p.theme.primaryLight2};
`

type PostWrapperProps = React.ComponentPropsWithoutRef<typeof PostWrapperLink> & { isCurrent: boolean }

const UnstyledPostWrapper = ({ isCurrent, ...props }: PostWrapperProps) => {
  const WrapperComponent = isCurrent ? PostWrapperDiv : PostWrapperLink
  return <WrapperComponent {...props} />
}

const FlexColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${spacing};
  align-self: stretch;
  justify-content: center;
`

const PostWrapper = styled(UnstyledPostWrapper)`
  & + & ${FlexColumn} {
    border-top: 1px solid ${p => p.theme.primaryLight3};
  }
`

const PostImage = styled.img`
  object-fit: cover;
  max-width: 15rem;
  border-radius: 0.5rem;
  margin: ${spacing};
  margin-right: 2rem;
  ${mobile(
    css`
      display: none;
    `,
  )}
`

const BadgeRow = styled.div`
  margin-bottom: 0.875rem;
  display: flex;
  align-items: baseline;
  ${Badge} {
    margin-right: 0.5rem;
  }
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`

const TitleLineRenderer = styled(MDXRenderer)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
`

const ArrowSVG = ({ visible, ...props }: React.ComponentProps<'svg'> & { visible?: boolean }) => (
  <svg width="16" height="16" {...props}>
    <path d="M1 7a1 1 0 1 0 0 2V7zm14 1l.707.707a1 1 0 0 0 0-1.414L15 8zM8.707.293a1 1 0 1 0-1.414 1.414L8.707.293zm-1.414 14a1 1 0 1 0 1.414 1.414l-1.414-1.414zM1 9h14V7H1v2zm6.293-7.293l7 7 1.414-1.414-7-7-1.414 1.414zm7 5.586l-7 7 1.414 1.414 7-7-1.414-1.414z" />
  </svg>
)

const ArrowIcon = styled(ArrowSVG)`
  flex: 0 0 auto;
  margin: 0.5rem 1.5rem 1.5rem;
  fill: ${p => (p.visible ? p.theme.primaryLight2 : 'none')};
  flex: 0 0 auto;
  ${mobile(
    css`
      display: none;
    `,
  )}
`
