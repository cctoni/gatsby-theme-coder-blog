import React from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'

type GlitchProps = {
  path: string
  name?: string
  width?: string
  height?: string
  style?: React.CSSProperties
  className?: string
}

const Glitch = ({ path, name, width = '100%', height = '420px', style, className }: GlitchProps) => (
  <Wrapper style={style} className={className}>
    <div className="glitch-embed-wrap" style={{ height, width }}>
      <iframe
        src={
          path
            ? `https://glitch.com/embed/#!/embed/${name}?path=${path}&previewSize=0&attributionHidden=true`
            : `https://glitch.com/embed/#!/embed/${name}?previewSize=0&attributionHidden=true`
        }
        title={`${name} on glitch`}
        style={{ height: '100%', width: '100%', border: 0 }}
      />
    </div>
  </Wrapper>
)

export default Glitch

// Styles
const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  ${mobile(css`
    margin-top: 20px;
    margin-bottom: 20px;

    height: 220px;
  `)};
`
