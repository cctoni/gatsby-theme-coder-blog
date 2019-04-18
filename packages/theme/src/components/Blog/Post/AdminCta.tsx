import React from 'react'
import styled from 'styled-components'
import DatabaseIllustration from '../../../vectors/Database'

const Arrow = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.244127 8.57738C-0.081305 8.90287 -0.081305 9.43045 0.244127 9.75594C0.569558 10.0814 1.09719 10.0814 1.42261 9.75594L0.244127 8.57738ZM9.16655 0.833527L9.99987 0.833535C9.99987 0.373309 9.62679 0.000218831 9.16655 0.000207331V0.833527ZM0.833341 2.62006e-10C0.37311 -1.14162e-05 1.14167e-05 0.373069 2.62006e-10 0.833302C-1.14162e-05 1.29353 0.373069 1.66663 0.833299 1.66664L0.833341 2.62006e-10ZM8.33315 9.16645C8.33315 9.62669 8.70622 9.99977 9.16647 9.99977C9.62671 9.99977 9.99978 9.62669 9.99978 9.16645H8.33315ZM1.42261 9.75594L9.75579 1.42278L8.57723 0.244281L0.244127 8.57738L1.42261 9.75594ZM0.833299 1.66664L9.16647 1.66685L9.16655 0.000207331L0.833341 2.62006e-10L0.833299 1.66664ZM8.33323 0.833518L8.33315 9.16645H9.99978L9.99987 0.833535L8.33323 0.833518Z"
      fill="#fff"
    />
  </svg>
)

export default () => (
  <Container>
    <Database>
      <DatabaseIllustration />
    </Database>
    <Main>
      <Text>
        <Title>Try out Prisma Admin</Title>
        <Subtitle>Explore a live example</Subtitle>
      </Text>
      <Button target="_blank" href="https://www.prisma.io/generate-demo-project">
        Open the example project
        <Arrow />
      </Button>
    </Main>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${p => p.theme.primaryLight7};
  border-radius: 8px;
`
const Database = styled.div`
  display: none;
  width: 120px;
  height: auto;
  margin-top: -7px;

  @media screen and (min-width: 420px) {
    display: block;
  }
`

const Main = styled.div`
  padding: 24px;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 420px) {
    padding: 24px 24px 24px 0;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`

const Text = styled.div``

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
`
const Subtitle = styled.div`
  margin-top: 4px;
  color: ${p => p.theme.primaryLight2};
`

const Button = styled.a`
  white-space: nowrap;
  background-color: ${p => p.theme.primary};
  border-radius: 6px;
  height: 36px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-weight: 600;
  margin-top: 16px;

  @media screen and (min-width: 700px) {
    margin-top: 0;
  }

  svg {
    opacity: 0.5;
    margin-left: 8px;
  }
`
