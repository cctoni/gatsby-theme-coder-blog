import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'

const Subtitle = styled.p`
  margin: 40px 0;
  font-size: ${p => p.theme.sizeHeroSubtitle}px;
  line-height: 1.5;
  color: ${p => (p.color === 'dark' ? p.theme.primary : p.theme.primaryLight3)};

  ${mobile(css`
    font-size: 18px;
    margin: 24px 0;
  `)};
`

export default Subtitle
