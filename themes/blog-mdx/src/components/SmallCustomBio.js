import React from 'react'

import { rhythm } from '../utils/typography'

import styles from './custombio.module.css'

import { Box, Flex } from 'rebass'

function SmallCustomBio({ author, piclink, date, readingtime }) {
  return (
    <Flex>
      <Box>
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
      </Box>
      <Box>
        {author}
        <button className={styles.smallFollow}>Follow</button>
        <br />
        {date + ' '}
        {readingtime}
      </Box>
    </Flex>
  )
}

export default SmallCustomBio
