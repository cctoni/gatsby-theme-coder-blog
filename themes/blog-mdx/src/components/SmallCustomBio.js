import React from 'react'
import { Bio, Image, Content, Author, Details } from './CustomBio'

function SmallCustomBio({ author, piclink, date, readingTime }) {
  return (
    <div>
      <Bio>
        <Image src={piclink} alt={author} />
        <Content>
          <Author>{author}</Author>
          <Details>
            {readingTime ? `${date} • ${readingTime}` : `${date}`}
          </Details>
        </Content>
      </Bio>
    </div>
  )
}

export default SmallCustomBio
