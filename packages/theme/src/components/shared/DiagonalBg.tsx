import React from 'react'
import styled, { css } from 'styled-components'

// Utilities
import { mobile } from '../../utils/styles/media'

// "reference transparent" getter (styled-component inline getter)
type Getter<T> = T | ((props: any) => Getter<T>)
type MobilePositionProps = { topOnMobile?: number; bottomOnMobile?: number }
type PositionProps = { top?: number; bottom?: number; height?: number } & MobilePositionProps

export const Diagonal = styled.div<PositionProps & { bg?: Getter<string> }>`
  z-index: ${p => p.theme.diagonalBgZIndex};
  position: absolute;
  top: ${p => (p.top ? p.top + `px` : 'auto')};
  bottom: ${p => (p.bottom ? p.bottom + `px` : 'auto')};
  left: 50%;
  width: 6000px;
  height: ${p => (p.height || 100) + `px`};
  transform-origin: 0;
  transform: translate(-50%) skewY(-30deg);
  background: ${p => p.bg || p.theme.primaryDark1};

  ${mobile(css<MobilePositionProps>`
    top: ${p => (p.topOnMobile ? p.topOnMobile + `px` : '')};
    bottom: ${p => (p.bottomOnMobile ? p.bottomOnMobile + `px` : '')};
  `)};
`

export const AboveDiagonal = styled.div`
  position: relative;
  z-index: ${p => p.theme.diagonalBgZIndex + 1};
`

export const Wrapper = styled.div<{ bg?: Getter<string> }>`
  position: relative;
  overflow: hidden;
  background: ${p => p.bg || 'none'};
`

type DiagonalBgProps = PositionProps & {
  children: React.ReactNode
  style?: React.CSSProperties
  defaultBackground?: string
  diagonalBg?: Getter<string>
}

const DiagonalBg = ({ children, style, defaultBackground, diagonalBg, ...props }: DiagonalBgProps) => (
  <Wrapper style={style} bg={defaultBackground}>
    <Diagonal bg={diagonalBg} {...props} />
    <AboveDiagonal>{children}</AboveDiagonal>
  </Wrapper>
)

export default DiagonalBg
