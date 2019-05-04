import React from 'react'

import { rhythm } from '../utils/typography'

import './custombio.css'

function CustomBio({
  author,
  twitter,
  orgaTwitter,
  piclink,
  bio,
  orgaPicLink,
  orgaName,
  orgaBio,
}) {
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
        <strong>{author}</strong>
        <p className="userBio">{bio}</p>
      </div>
      <div className="buttondiv">
        <a target="_blank" href={`https://twitter.com/${twitter}`}>
          <button className="follow">Follow</button>
        </a>
      </div>

      <div className="organization">
        <img
          src={orgaPicLink}
          alt={orgaName}
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
        <strong>{orgaName}</strong>
        <p className="orgaBio">{orgaBio}</p>
      </div>
      <div className="buttondiv">
        <a target="_blank" href={`https://twitter.com/${orgaTwitter}`}>
          <button className="follow">Follow</button>
        </a>
      </div>
    </div>
  )
}

export default CustomBio
