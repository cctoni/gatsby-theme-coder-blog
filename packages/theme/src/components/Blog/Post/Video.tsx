import React from 'react'
import styled from 'styled-components'

export default (props: React.ComponentPropsWithoutRef<'video'>) => {
  return <Video autoPlay loop playsInline muted {...props} />
}

const Video = styled.video`
  width: 100%;
  height: auto;
  margin: 20px 0;
`
