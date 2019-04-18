import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

// Local
import { MdxSeriesNode, AuthorMetaProps } from '../../../types'
import Date from '../Date'
import SeriesListing from '../SeriesListing'
import AuthorMeta from './AuthorMeta'
import { Space } from '../../shared/Space'
import { Container } from './styles'
import { mobile } from '../../../utils/styles/media'
import Badge from '../../shared/Badge'
import InteractionWidget from './InteractionWidget'

type HeaderProps = {
  date?: string
  title?: React.ReactNode
  titleText?: string
  url: string
  spectrum?: string // spectrum thread id
  series?: MdxSeriesNode
  indexInSeries?: number
  abstract?: React.ReactNode
  heroImage?: string
  heroImageAlt?: string
  authors?: AuthorMetaProps[]
  interaction?: boolean
  className?: string
  style?: React.CSSProperties
}

const Header = ({
  date,
  title,
  titleText,
  url,
  spectrum,
  series,
  indexInSeries,
  abstract,
  heroImage,
  heroImageAlt,
  authors,
  interaction,
  ...props
}: HeaderProps) => (
  <Wrapper {...props}>
    <Space height={80} heightOnMobile={40} />
    <Container>
      {date && <SpacedDate>{date}</SpacedDate>}
      <FlexRow>
        {/* [TODO]: add Guest Post type */}
        {/* [TODO]: add Customer Story type */}
        {series && (
          <Link to={series.fields.slug}>
            <Badge>Series</Badge>
          </Link>
        )}
      </FlexRow>
      {title && <Title>{title}</Title>}
      <SpaceBetween>
        {authors && <AuthorMeta authors={authors} />}
        {interaction && <InteractionWidget title={titleText} url={url} spectrum={spectrum} />}
      </SpaceBetween>
      {abstract && <Abstract>{abstract}</Abstract>}
      {heroImage && (
        <Image>
          <img src={heroImage} alt={heroImageAlt} />
        </Image>
      )}
      {series && <SeriesListing series={series} index={indexInSeries} />}
    </Container>
  </Wrapper>
)

export default Header

// Styles
const Wrapper = styled.header`
  overflow: hidden;
`

const SpacedDate = Date.extend`
  margin: 0 auto 0.25rem auto;
`

const FlexRow = styled.div`
  display: flex;
  padding: 0.75rem 0 0.5rem;
  ${Badge} {
    margin-right: 0.5rem;
  }
`

const SpaceBetween = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  margin: 0 auto 0;
  font-size: 36px;
  font-weight: bold;
  color: ${p => p.theme.primaryDark1};
  line-height: 1.2;

  ${mobile(css`
    font-size: 28px;
  `)};

  pre {
    display: inline-block;
    background: ${p => p.theme.primaryLight6} !important;
    border-radius: ${p => p.theme.radius}px;
    padding: 10px !important;
    font-size: 32px;
    line-height: 1;
    color: ${p => p.theme.primary};
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 4px;
  }
`

const Abstract = styled.div`
  p {
    font-size: 22px;
    line-height: 1.5;
  }
`

const Image = styled.div`
  overflow: hidden;
  border-radius: ${p => p.theme.radiusBig}px;

  margin-top: 64px;
  margin-bottom: 50px;
  margin-left: -52px;
  margin-right: -52px;

  ${mobile(css`
    margin-top: 32px;
    margin-bottom: 24px;
    margin-left: -12px;
    margin-right: -12px;
  `)};

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`
