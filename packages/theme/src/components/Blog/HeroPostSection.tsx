import React from 'react'
import styled, { css } from 'styled-components'

import { mobile } from '../../utils/styles/media'

import Container from '../shared/Container'
import HeroPost from './HeroPost'
import PostCard from './PostCard'
import { BlogPostCardInternalProps } from './BlogPostCard'

export default (props: BlogPostCardInternalProps) => (
  <Container lessPadding>
    <HideOnMobile>
      <HeroPost {...props} />
    </HideOnMobile>
    <ShowOnMobile>
      <PostCard {...props} />
    </ShowOnMobile>
  </Container>
)

const HideOnMobile = styled.div`
  ${mobile(css`
    display: none;
  `)};
`

const ShowOnMobile = styled.div`
  display: none;
  ${mobile(css`
    display: block;
  `)};
`
