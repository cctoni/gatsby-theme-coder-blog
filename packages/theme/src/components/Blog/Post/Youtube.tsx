import React from 'react'
import styled, { css } from 'styled-components'
import Youtube from 'react-youtube'
import { mobile } from '../../../utils/styles/media'

type YoutubeProps = {
  videoId: string
  width?: string
  playerVars?: NonNullable<React.ComponentProps<typeof Youtube>['opts']>['playerVars']
} & React.ComponentPropsWithoutRef<typeof Wrapper>

export default ({ videoId, width = '100%', playerVars, ...props }: YoutubeProps) => (
  <Wrapper {...props}>
    <Youtube
      videoId={videoId}
      opts={{
        width,
        playerVars: {
          rel: 0,
          showinfo: 1,
          modestbranding: 1,
          ...playerVars,
          // https://developers.google.com/youtube/player_parameters
        },
      }}
    />
  </Wrapper>
)

// Styles
const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  ${mobile(css`
    margin-top: 20px;
    margin-bottom: 20px;

    iframe {
      height: 220px;
    }
  `)};
`
