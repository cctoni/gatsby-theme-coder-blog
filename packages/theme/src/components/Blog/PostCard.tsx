import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BlogPostCardInternalProps } from './BlogPostCard'

type DOMProps = { style?: React.CSSProperties; className?: string }
type PostCardProps = BlogPostCardInternalProps & DOMProps

const PostCard = ({ date, title, abstract, image, alt, href, ...props }: PostCardProps) => (
  <WrapperLink to={href} style={props.style} className={props.className}>
    <Image>
      <img src={image} alt={alt || ''} />
    </Image>
    <Texts>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Abstract>{abstract}</Abstract>
    </Texts>
  </WrapperLink>
)

export default PostCard

// Styles
const WrapperLink = styled(Link)`
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  border-radius: ${p => p.theme.radiusBig}px;
  border: 1px solid ${p => p.theme.primaryLight3};
  background: white;
  user-select: none;
  overflow: hidden;
  margin: 0;

  transition: all 150ms ease;

  &:hover {
    border: 1px solid ${p => p.theme.primaryLight2};
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05);
  }
`

const Image = styled.div`
  width: 100%;
  height: 193px;
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 60px;

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
  padding: 24px;
`

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  line-height: 1.4;
  color: ${p => p.theme.primaryDark1};
`

const Abstract = styled.div`
  margin: 24px 0 0 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.primary};
`

const Date = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${p => p.theme.primaryLight2};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: 0;
`
