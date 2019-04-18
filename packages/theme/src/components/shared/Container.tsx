import styled, { css } from 'styled-components'
import { mobile } from '../../utils/styles/media'

const width = (p: any) => p.theme.middleContainerWidth
const narrowWidth = (p: any) => p.theme.middleContainerNarrowWidth

type ContainerProps = { sidePadding?: number; lessPadding?: boolean; width?: number; narrow?: boolean }

const Container = styled.div<ContainerProps>`
  max-width: ${p => (p.width ? p.width : p.narrow ? narrowWidth : width)}px;
  margin: 0 auto;

  @media (max-width: ${p => (p.width ? p.width : p.narrow ? narrowWidth : width)}px) {
    padding-right: ${p => (p.sidePadding ? p.sidePadding : p.lessPadding ? 16 : 32)}px;
    padding-left: ${p => (p.sidePadding ? p.sidePadding : p.lessPadding ? 16 : 32)}px;
  }

  ${mobile(css`
    max-width: 500px;
  `)};
`

export default Container
