import React from 'react'

import { rhythm } from '../utils/typography'

function CustomBio({ author, twitter, piclink, bio }) {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={piclink}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: 50,
          height: 50,
          borderRadius: `100%`,
        }}
      />
      <div>
        <strong>{author}</strong>
        <p>
          {bio}{' '}
          <a target="_blank" href={`https://twitter.com/${twitter}`}>
            {`Follow @${twitter} on Twitter!`}
          </a>
        </p>
      </div>
    </div>
  )
}

export default CustomBio
