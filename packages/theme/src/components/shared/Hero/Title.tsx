import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'

const Title = styled.h1`
  margin: 0;
  font-size: ${p => p.theme.sizeHeroTitle}px;
  font-weight: bold;
  line-height: 1.125;
  color: ${p => (p.color === 'dark' ? p.theme.primaryDark1 : 'white')};

  ${mobile(css`
    font-size: 32px;
  `)};
`

export default Title
