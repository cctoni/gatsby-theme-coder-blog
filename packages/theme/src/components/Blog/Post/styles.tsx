import styled, { css } from 'styled-components'
import React from 'react'
import { mobile, tablet } from '../../../utils/styles/media'

export const Container = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  ${mobile(css`
    padding: 0 20px;
  `)};
`

export const Article = styled.article`
  word-break: break-word;
  word-wrap: break-word;
  iframe {
    margin-top: 32px;
    width: 100%;
  }
`

const bodyTextStyle = css`
  font-size: 18px;
  line-height: 1.7;
  color: ${p => p.theme.primary};
  ${mobile(css`
    font-size: 17px;
  `)};
`

const listStyles = css`
  padding: 0;
  list-style: none;
  list-style-image: none;
  margin-top: 38px;
  ${mobile(css`
    margin-top: 30px;
  `)};
`

export const Ul = styled.ul`
  ${listStyles};
  li {
    &:before {
      color: ${p => p.theme.blue};
      content: '•';
      font-size: 36px;
      line-height: 0.9;
      vertical-align: middle;
      padding-right: 15px;
    }
  }
`

export const Ol = styled.ol`
  ${listStyles};
  counter-reset: post;
  li {
    &:before {
      font-feature-settings: 'liga' on, 'lnum' on;
      -moz-font-feature-settings: 'liga' on, 'lnum' on;
      -webkit-font-feature-settings: 'liga' on, 'lnum' on;
      padding-right: 12px;
      counter-increment: post;
      content: counter(post) '.';
    }
  }
`

export const Li = styled.li`
  ${bodyTextStyle};
  margin-left: 30px;
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    position: absolute;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 78px;
    margin-left: -78px;
    text-align: right;
  }
`

export const Paragraph = styled.p`
  margin: 0;
  margin-top: 29px;
  ${bodyTextStyle};
  & + ${Ol}, & + ${Ul}, & + p {
    margin-top: 29px;
    ${mobile(css`
      margin-top: 21px;
    `)};
  }
  ${Li} & + ${Ol}, ${Li} & + ${Ul}, ${Li} & + p {
    margin-top: 12px;
    margin-bottom: 40px;
    ${mobile(css`
      margin-top: 6px;
    `)};
  }
`

export const Blockquote = styled.blockquote`
  margin: 1em 0;
  font-size: 18px;
  line-height: 1.6;
  color: ${p => p.theme.primaryLight2};
  font-style: italic;
  border-left: 6px solid ${p => p.theme.primaryLight3};
  padding-left: 20px;
  padding-bottom: 2px;
  margin-top: 40px;
  margin-bottom: 40px;
  ${mobile(css`
    padding-left: 16px;
    margin-left: -20px;
    margin-top: 21px;
    margin-bottom: 21px;
  `)};
  ${Paragraph}:last-child {
    margin-bottom: 0;
  }
  * {
    color: ${p => p.theme.primaryLight2}!important;
  }
`

export const A = styled.a`
  font-size: inherit;
  color: ${p => p.theme.primary};
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.68) 50%, rgba(0, 0, 0, 0) 50%);
  background-repeat: repeat-x;
  background-size: 2px 0.1em;
  background-position: 0 1.17em;
  code {
    position: relative;
    text-decoration: underline;
    z-index: 1;
    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      background: white;
      left: -2px;
      right: -2px;
      height: 4px;
      bottom: 3px;
    }
  }
`

export const H5 = styled.h5`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  color: ${p => p.theme.primaryDark1};
  margin-top: 32px;
  margin-bottom: 24px;
  ${mobile(css`
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 12px;
  `)}
  & + ${Paragraph} {
    margin-top: 0;
  }
`

export const H4 = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
  color: ${p => p.theme.primaryDark1};
  margin-top: 32px;
  margin-bottom: 32px;
  ${mobile(css`
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 12px;
  `)}
  & + ${Paragraph} {
    margin-top: 0;
  }
`

export const H3 = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: ${p => p.theme.primaryDark1};
  margin-top: 40px;
  margin-bottom: 32px;
  ${mobile(css`
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 14px;
  `)}
  & + ${Paragraph} {
    margin-top: 0;
  }
`

export const H2 = styled.h2`
  font-size: 32px;
  line-height: 1.23;
  font-weight: bold;
  color: ${p => p.theme.primaryDark1};
  margin-top: 64px;
  margin-bottom: 32px;
  ${mobile(css`
    font-size: 28px;
    margin-top: 48px;
    margin-bottom: 24px;
  `)}
  & + ${Paragraph} {
    margin-top: 0;
  }
  & + ${H3} {
    margin-top: 0;
  }
`

export const Hr = styled.hr`
  margin: 48px auto;
  display: block;
  border: 0;
  height: 4px;
  width: 120px;
  background-color: ${p => p.theme.primaryLight3};
  border-radius: 4px;
`

export const Pre = styled.pre`
  background: ${p => p.theme.primaryLight6} !important;
  border-radius: ${p => p.theme.radius}px;
  padding: 20px !important;
  font-size: 14px;
  line-height: 24px !important;
  color: ${p => p.theme.primary};
  overflow: auto;
  margin-top: 40px !important;
  margin-bottom: 40px !important;
  code {
    font-size: 14px;
    line-height: 24px !important;
    text-shadow: none;
    font-family: ${p => p.theme.fontStackMono};
  }
  ${mobile(css`
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  `)};
`

export const InlineCode = styled.code`
  background: ${p => p.theme.primaryLight6};
  border-radius: ${p => p.theme.radius}px;
  padding: 3px 4px;
  margin: 0 2px;
  font-size: 0.875em;
  a {
    background-image: none;
  } /* Lol.. */
`

export const Strong = styled.strong`
  font-weight: 600;
`

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${p => p.theme.primaryLight3};
  border-radius: 8px;
  border-spacing: 0;
  margin: 1.5rem 0;
  word-break: normal;
`

export const TH = styled.th`
  padding: 12px 24px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: ${p => p.theme.primaryLight2};
  text-transform: uppercase;
`

export const TD = styled.td`
  padding: 16px 24px;
  border-top: 1px solid ${p => p.theme.primaryLight3};
  text-align: left;
`

const WideImageComponent = styled.img`
  display: block;
  width: calc(100% + 300px);
  height: auto;
  margin: 24px -150px;
  cursor: pointer;
  ${tablet(css`
    width: 100%;
    margin: 20px 0;
  `)};
`
const WideImageComponentFullscreen = styled.img`
  transition: transform 0.1s ease;
  position: relative;
  display: block;
  max-width: 100vw;
  height: auto;
  cursor: pointer;
`

const Overlay = styled.div<{ isOpen: boolean }>`
  transition: opacity 0.1s ease;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${p => (p.isOpen ? '1' : '0')};
  pointer-events: ${p => (p.isOpen ? 'auto' : 'none')};
  img {
    transform: ${p => (p.isOpen ? 'scale(1)' : 'scale(0.75)')};
  }
`

type WideImageProps = React.ComponentPropsWithoutRef<'img'>
type WideImageState = { isOpen: boolean }
export class WideImage extends React.Component<WideImageProps, WideImageState> {
  state = { isOpen: false }

  render() {
    const { isOpen } = this.state

    return (
      <>
        <WideImageComponent onClick={this.openModal} {...this.props} />
        <Overlay onClick={this.closeModal} isOpen={isOpen}>
          <WideImageComponentFullscreen {...this.props} />
        </Overlay>
      </>
    )
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })
}