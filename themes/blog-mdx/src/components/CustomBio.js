import React from 'react'

import { rhythm } from '../utils/typography'

import './custombio.css'

function CustomBio({
  author,
  twitter,
  piclink,
  bio,
  orgaPicLink,
  orgaName,
  orgaBio,
}) {
  return (
    <div>
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
        <button className="follow">Follow</button>
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
        <button className="follow">Follow</button>
      </div>
    </div>
  )
}

export default CustomBio
