import React from 'react'
import styled from 'styled-components'

export default (props: React.ComponentPropsWithoutRef<'img'>) => (
  <Wrapper>
    <Image {...props} />
    {props.alt && <Title>{props.alt}</Title>}
  </Wrapper>
)

// Styles
const Wrapper = styled.div`
  margin: 24px auto;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

const Title = styled.div`
  color: ${p => p.theme.primaryLight2};
  font-style: italic;
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
`
