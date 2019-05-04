import React from 'react'

import { rhythm } from '../utils/typography'

import './custombio.css'

function SmallCustomBio({ author, piclink, date, readingtime, twitter }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
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
      </div>
      <div>
        {author}
        <a
          target="_blank"
          href={`https://twitter.com/${twitter}`}
          style={{ textDecoration: 'none' }}
        >
          <button className="smallFollow">Follow</button>
        </a>
        <br />
        {date + ' '}
        {readingtime}
      </div>
    </div>
  )
}

export default SmallCustomBio
