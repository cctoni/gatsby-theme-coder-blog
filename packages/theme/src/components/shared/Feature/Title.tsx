import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'

const Title = styled.h1`
  font-size: ${p => p.theme.sizeFeatureTitle}px;
  line-height: 1.42;
  color: ${p => (p.color === 'dark' ? p.theme.primaryDark1 : 'white')};

  ${mobile(css`
    font-size: 24px;
  `)};
`

export default Title
