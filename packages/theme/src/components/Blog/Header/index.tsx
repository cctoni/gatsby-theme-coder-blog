import React from 'react'
import styled, { css } from 'styled-components'

// Local
import HybridNav from '../../shared/Nav/HybridNav'
import HeroTitle from '../../shared/Hero/Title'
import HeroSubtitle from '../../shared/Hero/Subtitle'
import Container from '../../shared/Container'
import Space from '../../shared/Space'
import { mobile } from '../../../utils/styles/media'

// Assets
import blog from './blog.svg'

export default () => (
  <Wrapper>
    <HybridNav color="dark" />

    <Space height={92} heightOnMobile={40} />

    <Container>
      <Stack>
        <Texts>
          <Title color="dark">Prisma Blog</Title>
          <Subtitle color="dark">
            Guides, announcements and articles about Prisma, databases and the GraphQL ecosystem.
          </Subtitle>
        </Texts>

        <Illustration>
          <img src={blog} alt="Prisma Blog Illustration" />
        </Illustration>
      </Stack>
    </Container>
  </Wrapper>
)

// Styles
const Wrapper = styled.header``

const Title = HeroTitle.extend`
  max-width: 630px;
`

const Subtitle = HeroSubtitle.extend`
  max-width: 630px;
`

const Stack = styled.div`
  display: flex;
  align-items: center;
`

const Texts = styled.div`
  margin-right: 32px;
  flex-grow: 1;
`

const Illustration = styled.div`
  flex-grow: 1;
  margin-top: -13px;

  img {
    display: block;
  }

  ${mobile(
    css`
      display: none;
    `,
  )};
`
