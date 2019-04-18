import * as React from 'react'
import styled from 'styled-components'

let index = 0

export default class Collapse extends React.Component<{ title: string }> {
  render() {
    const { title, children } = this.props
    return (
      <Wrapper>
        <Tab>
          <Input id={`tab-${++index}`} type="checkbox" name="tab" />
          <StyledArrow />
          <Label htmlFor={`tab-${index}`}>{title}</Label>
          <TabContent className="tab-content">{children}</TabContent>
        </Tab>
      </Wrapper>
    )
  }
}

const Arrow = (props: React.ComponentProps<'svg'>) => (
  <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.3273 0C7.88605 0 8.20036 0.653318 7.85732 1.1017L4.53001 5.45076C4.26119 5.80213 3.73881 5.80213 3.46999 5.45076L0.142684 1.1017C-0.200356 0.653318 0.113948 0 0.672698 0H7.3273Z"
      transform="rotate(-90 4.5 4.357)"
      fill="#8FA6B2"
    />
  </svg>
)

const Wrapper = styled.div`
  margin-top: 40px;
`

const Tab = styled.div`
  position: relative;
  overflow: hidden;
  .tab-content {
    transition: max-height 0.35s;
  }
  &:before {
    content: '';
    position: absolute;
    background: #eff3f5;
    width: 6px;
    border-radius: 6px;
    height: 100%;
    left: 0;
  }

  p {
    margin-top: 8px;
  }
`

const Label = styled.label`
  position: relative;
  display: block;
  color: #0c344b;
  font-weight: 600;
  line-height: 2;
  padding-left: 36px;
  cursor: pointer;
`

const TabContent = styled.div`
  max-height: 0;
  overflow: hidden;
  color: #3d5866;
  transition: max-height 0.35s, padding 0.35s;
  padding-left: 36px;
  padding-bottom: 0;
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked ~ .tab-content {
    max-height: 2000px;
    padding-bottom: 8px;
  }
`

const StyledArrow = styled(Arrow)`
  position: absolute;
  left: 18px;
  top: 10px;
  transition: transform 0.15s;
  input:checked + & {
    transform: rotate(90deg);
  }
`
