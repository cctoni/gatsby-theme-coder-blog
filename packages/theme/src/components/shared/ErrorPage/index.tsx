import React, { Fragment } from 'react'
import styled from 'styled-components'

// Components
import Space from '../Space'

// Sections
import Nav from '../Nav'
import Footer from '../Footer'

// Assets
import nothing from './nothing.svg'

const messages = {
  404: {
    title: 'Nothing here…',
    description: 'The page you were looking for does not seem to exist.',
  },
  default: {
    title: 'Error…',
    description: 'Oops, something went wrong! This is embarrassing.',
  },
}

type ErrorPageProps = { statusCode?: keyof typeof messages }

const ErrorPage = ({ statusCode = 'default' }: ErrorPageProps) => {
  const { title, description } = messages[statusCode] || messages.default
  return (
    <Fragment>
      <Nav color="dark" />
      <Space height={300} />
      <Wrapper>
        <Container>
          <Illustration src={nothing} />
          <div>
            {statusCode && <Code>{statusCode}</Code>}
            <Title>{title}</Title>
            <Description>
              {description}
              <br />
              Try heading <a href="/">back to the homepage</a> or <a href="mailto:support@prisma.io">reach out to us</a>{' '}
              if you need help.
            </Description>
          </div>
        </Container>
      </Wrapper>
      <Space height={300} />
      <Footer />
    </Fragment>
  )
}

export default ErrorPage

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`

const Illustration = styled.img`
  margin-right: 80px;
`

const Code = styled.div`
  color: ${p => p.theme.primaryLight2};
  font-weight: 700;
  font-size: 18px;
`

const Title = styled.h1``
const Description = styled.p`
  font-size: 20px;
  line-height: 32px;

  a {
    text-decoration: underline;
    font-size: inherit;
  }
`
