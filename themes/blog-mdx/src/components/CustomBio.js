import React from 'react'

import { rhythm } from '../utils/typography'

import styles from './custombio.module.css'

import { Box, Flex } from 'rebass'

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
        <strong>{author}</strong>
        <p className={styles.userBio}>{bio}</p>
      </Box>
      <Box className={styles.buttonBox}>
        <button className={styles.follow}>Follow</button>
      </Box>

      <Box className={styles.organization}>
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
      </Box>
      <Box>
        <strong>{orgaName}</strong>
        <p className={styles.orgaBio}>{orgaBio}</p>
      </Box>
      <Box className={styles.buttonBox}>
        <button className={styles.follow}>Follow</button>
      </Box>
    </Flex>
  )
}

export default CustomBio
