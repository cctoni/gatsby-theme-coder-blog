import styled, { css } from 'styled-components'
import { mobile } from '../../utils/styles/media'

type SpaceProps = {
  width?: number
  height?: number
  fillVertically?: boolean
  fillHorizentally?: boolean
  widthOnMobile?: number
  heightOnMobile?: number
}

const isSize = (value: any) => typeof value === 'number' && !isNaN(value)

export const Space = styled.div<SpaceProps>`
  width: ${p => p.width || 0}px;
  height: ${p => p.height || 0}px;
  pointer-events: none;

  ${p =>
    p.fillVertically &&
    css`
      margin-top: auto;
      margin-bottom: auto;
    `};

  ${p =>
    p.fillHorizentally &&
    css`
      margin-right: auto;
      margin-left: auto;
    `};

  ${mobile(css<SpaceProps>`
    width: ${p => (isSize(p.widthOnMobile) ? p.widthOnMobile : p.width || 0)}px;
    height: ${p => (isSize(p.heightOnMobile) ? p.heightOnMobile : p.height || 0)}px;
  `)};
`

export default Space
