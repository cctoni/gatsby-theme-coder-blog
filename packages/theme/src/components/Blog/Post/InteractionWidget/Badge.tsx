import React from 'react'
import styled from 'styled-components'
import Twitter from '../../../../vectors/Twitter'
import Spectrum from '../../../../vectors/Spectrum'

const sources = {
  twitter: {
    logo: Twitter,
    background: '#1DA1F2',
  },
  spectrum: {
    logo: Spectrum,
    background: '#3D2CE3',
  },
}

const Wrapper = styled.a<{ bg: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${p => p.bg};
`

const Count = styled.div`
  position: absolute;
  text-align: center;
  border-radius: 0.625rem;
  right: -0.625rem;
  top: -0.625rem;
  height: 1.25rem;
  min-width: 1.25rem;
  width: auto;
  padding: 0 0.375rem;
  overflow: hidden;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.25rem;
  color: white;
  background: ${p => p.theme.red};
`

type InteractionBadgeProps = {
  type: keyof typeof sources
  totalCount?: number
  url: string
}

const InteractionBadge = ({ type, url, totalCount = 0 }: InteractionBadgeProps) => {
  const { logo: Logo, background: bg } = sources[type]
  return (
    <Wrapper href={url} bg={bg} target="_blank" rel="noopener noreferrer">
      <Logo style={{ width: 'auto', height: '0.875rem' }} />
      {totalCount > 0 && <Count>{totalCount}</Count>}
    </Wrapper>
  )
}

export default InteractionBadge
