import React from 'react'
import styled, { StyledProps } from 'styled-components'
import { PureComponent } from 'react'
import { darken, lighten } from 'polished'

type SizeProp = 'big' | 'medium' | 'small'
type TypeProp = 'primary' | 'gray' | 'outline'
type ColorProp = 'light' | 'dark'

type AnchorButtonProps = Partial<React.ComponentPropsWithoutRef<'a'>>
type ButtonButtonProps = Partial<React.ComponentPropsWithoutRef<'button'>>

type ButtonProps = {
  icon: React.ReactNode
  size: SizeProp
  color: ColorProp
  inline: boolean
  align?: string
  type?: TypeProp
} & (AnchorButtonProps & ButtonButtonProps)

type ThemeStyledProps = StyledProps<any>

export default class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    size: 'medium',
    type: 'primary',
    color: 'light',
    inline: true,
    icon: null,
  }

  render() {
    const { icon, children, type, href, ...passed } = this.props

    // Add additional props
    const props = { ...passed, children: this.renderContent() }

    if (!type) {
      console.warn('Button should have a `type` prop.')
      return <div />
    }

    if (href) {
      // With `a` tag
      if (type === 'outline') {
        return <OutlineA {...props} href={href} />
      } else if (type === 'primary') {
        return <PrimaryA {...props} href={href} />
      } else if (type === 'gray') {
        return <GrayA {...props} href={href} />
      }
    } else {
      // With `button` tag
      if (type === 'outline') {
        return <OutlineButton {...props} />
      } else if (type === 'primary') {
        return <PrimaryButton {...props} />
      } else if (type === 'gray') {
        return <GrayButton {...props} />
      }
    }
  }

  renderContent() {
    const { children, icon } = this.props

    return (
      <>
        {icon && <Icon>{icon}</Icon>}
        <span>{children}</span>
      </>
    )
  }
}

// Sizes
const sidePadding = 16
const heightsMap = { big: 48, medium: 40, small: 32 }
const fontSizesMap = {
  big: (p: ThemeStyledProps) => p.theme.sizeActions,
  medium: (p: ThemeStyledProps) => p.theme.sizeActions,
  small: (p: ThemeStyledProps) => p.theme.sizeActionsSmall,
}

const height = (p: { size: SizeProp }) => heightsMap[p.size]
const getRadius = (size: SizeProp) =>
  size === 'small' ? (p: ThemeStyledProps) => p.theme.radiusSmall : (p: ThemeStyledProps) => p.theme.radius

// Colors
const hoveredWhite = `rgba(255, 255, 255, 0.88)`

const Base = styled.button<Partial<ButtonProps> & { size: SizeProp }>`
  display: ${p => (p.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: ${p => p.align || 'unset'};
  height: ${height}px;
  font-size: ${p => fontSizesMap[p.size]}px;
  padding-right: ${sidePadding}px;
  padding-left: ${sidePadding}px;
  padding-bottom: 0;
  padding-top: 0;
  white-space: nowrap;
  word-break: keep-all;

  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.4px;

  border-radius: ${p => getRadius(p.size)}px;
  user-select: none;
  background: none;
  cursor: pointer;
  outline: none;
  border: none;

  &:active {
    transform: translate3d(0, 1px, 0);
  }
`

// Outline
const OutlineButton = Base.extend`
  transition: color 150ms ease, border 150ms ease, transform 100ms ease;
  color: ${p => (p.color === 'light' ? p.theme.primaryLight3 : p.theme.primary)};
  border: 2px solid ${p => (p.color === 'light' ? p.theme.primaryLight1 : p.theme.primaryLight2)};

  &:hover,
  &:focus {
    color: ${p => (p.color === 'light' ? p.theme.primaryLight4 : p.theme.primaryLight1)};
    border: 2px solid ${p => (p.color === 'light' ? p.theme.primaryLight2 : p.theme.primaryLight3)};
  }
`
const OutlineA = OutlineButton.withComponent('a')

// Primary
const PrimaryButton = Base.extend`
  transition: color 150ms ease, background 150ms ease, transform 100ms ease;
  color: ${p => (p.color === 'light' ? p.theme.primaryDark1 : 'white')};
  background: ${p => (p.color === 'light' ? 'white' : p.theme.primary)};

  &:hover,
  &:focus {
    color: ${p => (p.color === 'light' ? p.theme.primary : 'white')};
    background: ${p => (p.color === 'light' ? hoveredWhite : p.theme.primaryLight1)};
  }
`
const PrimaryA = PrimaryButton.withComponent('a')

// Primary
const GrayButton = Base.extend`
  transition: color 150ms ease, background 150ms ease, transform 100ms ease;
  color: ${p => (p.color === 'light' ? 'white' : p.theme.primaryDark1)};
  background: ${p => (p.color === 'light' ? p.theme.primaryLight1 : p.theme.primaryLight3)};

  &:hover,
  &:focus {
    color: ${p => (p.color === 'light' ? hoveredWhite : p.theme.primaryLight1)};
    background: ${p =>
      p.color === 'light' ? darken(0.35, p.theme.primaryLight2) : lighten(0.08, p.theme.primaryLight3)};
  }
`
const GrayA = GrayButton.withComponent('a')

const Icon = styled.span`
  position: relative;
  top: 1px;
  margin-right: 12px;

  svg {
    fill: ${p => p.theme.primaryLight2};
    stroke: ${p => p.theme.primaryLight2};
  }
`
