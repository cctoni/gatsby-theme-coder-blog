import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BlogPostCardInternalProps } from './BlogPostCard'
// Local
import Date from './Date'

type DOMProps = { style?: React.CSSProperties; className?: string }
type HeroPostProps = BlogPostCardInternalProps & DOMProps

const HeroPost = ({ date, title, abstract, image, alt, href, ...props }: HeroPostProps) => {
  return (
    <article {...props}>
      <WrapperLink to={href}>
        <Image>
          <img src={image} alt={alt || ''} />
        </Image>
        <Texts>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Abstract>{abstract}</Abstract>
        </Texts>
      </WrapperLink>
    </article>
  )
}

export default HeroPost

// Styles
const WrapperLink = styled(Link)`
  display: flex;
  user-select: none;
`

const Image = styled.div`
  width: 600px;
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 1;
  margin-right: 60px;

  border-radius: ${p => p.theme.radiusBig}px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const Texts = styled.div`
  flex-grow: 1;
`

const Title = styled.h2`
  margin: 16px 0 24px 0;
  font-size: 28px;
  line-height: 1.42;
  color: ${p => p.theme.primaryDark1};
`

const Abstract = styled.div`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  color: ${p => p.theme.primary};
`
