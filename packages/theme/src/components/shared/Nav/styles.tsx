import styled, { css } from 'styled-components'

// Utilities
import { transition } from '../../../utils/styles/transition'
import { mobile } from '../../../utils/styles/media'

// Assets
import caretLight from './icons/caret-light.svg'
import caretDark from './icons/caret-dark.svg'
import rightArrow from './icons/right-arrow.svg'

type ColorProp = 'light' | 'dark'
const carets = { light: caretLight, dark: caretDark }

export const Wrapper = styled.div`
  padding-top: 40px;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SubItemsWrapper = styled.div`
  align-self: flex-end;
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid ${p => (p.color === 'dark' ? p.theme.primaryLight3 : p.theme.primaryLight1)};

  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const Space = styled.div`
  margin: 0 auto;
`

export const LogoWrapper = styled.a`
  fill: ${p => (p.color === 'light' ? 'white' : p.theme.primary)};
`

const itemsCommon = css`
  display: inline-block;
  padding-right: 16px;
  padding-left: 16px;
  cursor: pointer;
  text-decoration: none;

  &:last-child {
    padding-right: 0;
  }

  &:first-child {
    padding-left: 0;
  }
`

export const HideOnMobile = styled.div<{ enabled?: boolean }>`
  ${p =>
    p.enabled &&
    mobile(css`
      display: none;
    `)};
`

export const Item = styled.div`
  ${itemsCommon};
`

export const TextItem = styled.a<{ active?: boolean; padding?: boolean }>`
  ${itemsCommon};

  height: ${p => p.theme.navHeight}px;
  line-height: ${p => p.theme.navHeight}px;
  font-size: ${p => p.theme.sizeActions}px;
  font-weight: ${p => (p.active ? 'bold' : 'normal')};
  color: ${p =>
    p.color === 'dark'
      ? p.active
        ? p.theme.primaryDark1
        : p.theme.primary
      : p.active
      ? p.theme.primaryLight4
      : p.theme.primaryLight3};
  transition: ${transition('color')};

  &:hover {
    color: ${p => (p.color === 'dark' ? p.theme.primaryLight2 : p.theme.primaryLight4)};
  }

  ${p =>
    p.padding &&
    css`
      &:last-child,
      &:first-child {
        padding-right: 16px;
        padding-left: 16px;
      }
    `};
`

export const Dropdown = styled.div<{ color: ColorProp }>`
  width: 244px;
  position: absolute;
  top: ${p => p.theme.navHeight + 10}px;
  left: calc(50% - 122px);
  padding: 12px 24px;
  background: ${p => (p.color === 'dark' ? p.theme.primary : 'white')};
  border-radius: ${p => p.theme.radiusBig}px;
  box-shadow: 0px 2px 4px rgba(8, 35, 51, 0.05);

  transform: scale(0.5);
  transform-origin: center -10px;
  transition: transform 180ms ease, opacity 180ms ease, visibility 180ms ease;
  visibility: hidden;
  opacity: 0;

  &::before {
    content: ' ';
    height: 20px;
    width: 100%;
    background: url('${p => carets[p.color]}') no-repeat center bottom;
    position: absolute;
    top: -20px;
    left: 0;
  }
`

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    ${Dropdown} {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }
`

export const WithArrow = styled.a<{ textColor?: ColorProp }>`
  transition: transform 100ms ease, color 100ms ease;

  &::after {
    content: ' ';
    width: 14px;
    height: 12px;
    background: url('${rightArrow}') no-repeat;
    margin-left: 8px;
    display: inline-block;
    vertical-align: -1px;
    transition: transform 100ms ease, opacity 100ms ease;
  }

  color: ${p => (p.textColor === 'light' ? p.theme.primaryLight3 : p.theme.primary)};

  &:hover {
    color: ${p => (p.textColor === 'light' ? p.theme.primaryLight4 : p.theme.primaryLight1)};

    &::after {
      transform: translate(4px);
      opacity: 0.8;
    }
  }
`

export const DropdownItem = WithArrow.extend`
  font-size: 16px;
  line-height: 1;
  width: 100%;
  border-bottom: 1px solid ${p => (p.color === 'dark' ? p.theme.primaryLight1 : '#dce6ea')};
  white-space: nowrap;
  padding: 12px 0;
  color: ${p => (p.color === 'dark' ? 'white' : p.theme.primary)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${p => (p.color === 'dark' ? p.theme.primaryLight3 : p.theme.primaryLight1)};
  }

  &:last-child {
    border-bottom: 0;
  }

  &::after {
    opacity: 0.5;
    right: 0;
  }
`
