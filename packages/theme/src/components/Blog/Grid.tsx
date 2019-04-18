import React from 'react'
import styled from 'styled-components'
import Container from '../shared/Container'

export const Grid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <Container lessPadding>
    <GridWrapper {...props} />
  </Container>
)

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`

export const GridItem = styled.div`
  flex-grow: 1;
  flex-shrink: 1;

  @media (min-width: 800px) {
    max-width: 30%;
    flex-basis: 30%;
    margin-right: 48px;
    margin-bottom: 48px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 800px) {
    max-width: auto;
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`
