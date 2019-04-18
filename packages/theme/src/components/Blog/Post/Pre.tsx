import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'
import CopyToClipboard from 'react-copy-to-clipboard'
import { childrenToString } from '../../../utils/childrenToString'

type PreProps = React.ComponentPropsWithoutRef<typeof PreWrapper> & { copy?: boolean; playgroundLink?: string }

const getPreSettings = (children: any) => {
  let copy = false
  let lineNumbers = false

  if (children && children.props && children.props.props && children.props.props.className) {
    const split = children.props.props.className.split('@')
    if (split.length > 1) {
      const settings = split[1].split(',')
      copy = settings.includes('copy')
      lineNumbers = settings.includes('lineNumbers')
    }
  }

  return { copy, lineNumbers }
}

export class Pre extends Component<PreProps> {
  render() {
    const { children, copy, playgroundLink, className, ...props } = this.props
    const code = childrenToString(children)
    const settings = getPreSettings(children)

    return (
      <PreWrapper className={`${className || ''} ${settings.lineNumbers ? ' line-numbers' : ''}`} {...props}>
        {children}

        {playgroundLink && (
          <PlaygroundLink href={playgroundLink} target="_blank">
            <ButtonSmall>Open in Playground</ButtonSmall>
          </PlaygroundLink>
        )}

        {(copy || settings.copy) && (
          <AbsoluteCopyButton>
            <CopyButton text={code} />{' '}
          </AbsoluteCopyButton>
        )}
      </PreWrapper>
    )
  }
}

const PreWrapper = styled.pre`
  background: ${p => p.theme.primaryLight6} !important;
  border-radius: ${p => p.theme.radius}px;
  padding: 20px !important;
  font-size: 14px;
  line-height: 24px !important;
  color: ${p => p.theme.primary};
  overflow: auto;
  margin-top: 32px !important;
  margin-bottom: 32px !important;
  &:last-child {
    margin-bottom: 0 !important;
  }
  position: relative;

  code {
    text-shadow: none !important;
    font-family: ${p => p.theme.fontStackMono} !important;
  }

  ${mobile(css`
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  `)};

  &.line-numbers {
    position: relative;
    padding-left: 3.8em !important;
    counter-reset: linenumber;
  }

  &.line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  &.line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 14px;
    line-height: 24px;
    left: -3.8em !important;
    width: 3em !important; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: ${p => p.theme.primaryLight3};
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  .line-highlight {
    transform: translateY(6px);
    background: rgba(75, 138, 167, 0.07);
  }
`
const AbsoluteCopyButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  > div {
    right: -8px;
    top: -2px;
  }
`

const PlaygroundLink = styled.a`
  position: absolute;
  top: 16px;
  right: 67px;
`

const ButtonSmall = styled.div`
  cursor: pointer;

  background: ${p => p.theme.primaryLight2};
  box-shadow: 0px 2px 4px rgba(8, 35, 51, 0.05);
  border-radius: 4px;

  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px;
  padding-bottom: 6px;

  color: #ffffff;
  line-height: 1;
  text-shadow: none;
`

const CopyButton = ({ text = '', className = '' }) => (
  <Copy text={text} className={className}>
    <ButtonSmall>Copy</ButtonSmall>
  </Copy>
)

class Copy extends Component<{ text: string; className: string; color?: string }> {
  state = { copied: false }
  copyTimer: number | null = null

  componentWillUnmount() {
    if (this.copyTimer) clearTimeout(this.copyTimer)
  }

  render() {
    const { text, className, color = 'rgba(42,126,210,1)' } = this.props

    return (
      <CopyToClipboard text={text} onCopy={this.onCopy}>
        <CopyComponent className={className}>
          {this.state.copied && (
            <div className="indicator" style={{ color }}>
              Copied
            </div>
          )}
          {this.props.children}
        </CopyComponent>
      </CopyToClipboard>
    )
  }

  onCopy = () => {
    this.setState({ copied: true })
    this.copyTimer = window.setTimeout(() => this.setState({ copied: false }), 500)
  }
}

const CopyComponent = styled.div`
  & {
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  @keyframes copying {
    0% {
      opacity: 0;
      transform: translate(-50%, 0);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-50%, 50px);
    }
  }
  .indicator {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: copying 700ms linear;
  }
`
