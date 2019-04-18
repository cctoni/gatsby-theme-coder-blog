import React, { Component } from 'react'
import PrismCode from './PrismCode'
import styled from 'styled-components'
import GithubLogo from '../../../vectors/GithubLogo'
import { Pre } from './Pre'
import { childrenToString } from '../../../utils/childrenToString'

type CodeProps = {
  lines: number | number[]
  source: string | string[]
  language: string
  languages?: string[]
  hideCopy?: boolean
  playgroundLink?: string
}

export default class Code extends Component<CodeProps> {
  state = { tooltips: [], activeIndex: 0 }

  getCodeChildren() {
    const { children } = this.props
    let { lines, source } = this.props

    if (!Array.isArray(lines)) {
      lines = [lines]
    }

    if (!Array.isArray(source)) {
      source = [source]
    }

    return React.Children.toArray(children).filter(c => typeof c !== 'string')
  }

  render() {
    const { languages, hideCopy, playgroundLink } = this.props
    let { lines, source } = this.props

    if (!Array.isArray(lines)) {
      lines = [lines]
    }
    if (!Array.isArray(source)) {
      source = [source]
    }

    const { activeIndex } = this.state

    const childArray = this.getCodeChildren()
    const child = childArray[activeIndex]
    const code = child && (child as any).props && ((child as any).props as any).children

    return (
      <Wrapper>
        {languages && Array.isArray(languages) && (
          <div>
            {languages.map((lang, index) => (
              <Language active={index === activeIndex} key={lang} onClick={() => this.setActiveIndex(index)}>
                {lang}
              </Language>
            ))}
          </div>
        )}
        <Pree data-line={lines[activeIndex] || ''} copy={!hideCopy} playgroundLink={playgroundLink}>
          <PrismCode
            className={`${this.getLanguage(code) ||
              (this.props.language ? `language-${this.props.language}` : '')} line-numbers`}
          >
            {childrenToString(child)}
          </PrismCode>
        </Pree>

        {source && source[activeIndex] && (
          <Source href={source[activeIndex]} target="_blank">
            <GithubLogo fill="#8FA6B2" />
            <SourceFile>View the source file</SourceFile>
          </Source>
        )}
      </Wrapper>
    )
  }

  setActiveIndex = (activeIndex: number) => this.setState({ activeIndex })

  getLanguage(child: any) {
    return child && child.props && child.props.props && child.props.props.className
  }
  // this is one of the hackiest hacks humanity has ever seen
  // the bug was the following:
  // when having 2 consecutive code snippets, the second one would show the content of the first one
  // in order to prevent this issue, we now quickly switch to the last index, then switch back to index 0
  // it sounds crazy and it indeed is crazy
  // this btw only happens with Next.js - pure JS doesn't have this problem
  componentDidMount() {
    const { activeIndex } = this.state
    const codeChildren = this.getCodeChildren()
    this.setState({ activeIndex: codeChildren.length - 1 }, () => {
      this.setState({ activeIndex })
    })
  }
}

const Language = styled.div<{ active: boolean }>`
  color: ${p => (p.active ? p.theme.darkGray : p.theme.primaryLight2)};
  font-weight: ${p => (p.active ? 500 : 400)};
  display: inline-block;
  margin-left: 1px;
  cursor: pointer;
  * + & {
    margin-left: 16px;
  }
`

const Pree = styled(Pre)`
  margin-top: 12px !important;
  margin-bottom: 0 !important;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  .placeholder {
    font-size: 14px;
    font-weight: 500;
    color: ${p => p.theme.darkGray} !important;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 1px 2px rgba(12, 52, 75, 0.1);
    padding: 6px;
    cursor: default;
    position: relative;
    z-index: 2;
  }
`

const Source = styled.a`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #eff3f5;
  padding: 13px 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Wrapper = styled.div`
  margin-top: 40px;
  position: relative;
`

const SourceFile = styled.div`
  font-size: 14px;
  color: ${p => p.theme.primaryLight2};
  margin-left: 16px;
`
