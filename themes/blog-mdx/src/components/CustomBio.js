import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Bio = styled.div`
  ${tw`flex items-center flex-wrap lineheight-normal`}
`

export const Image = styled.img`
  ${tw`w-10 h-10 rounded-full my-2 mr-4`}
`

export const Content = styled.div`
  ${tw`text-sm`}
`

export const Author = styled.p`
  ${tw`text-black font-medium mb-0`}
`
export const Details = styled.p`
  ${tw`text-grey-dark`}
`
export const Button = styled.button`
  ${tw`border-grey-lightest uppercase hover:border-grey outline-none font-bold py-2 px-4 rounded`}
`

const CardWrapper = styled.div`
  ${tw`max-w-xs rounded overflow-hidden shadow-lg border-grey-lightest py-6 px-6`}
  .wrapper {
    ${tw`flex items-start`}
    .avatar {
      ${tw`w-12 h-12 rounded-full my-2 mx-0`}
    }
  }
  .footer {
    ${tw`flex flex-wrap justify-end`}
    button {
      ${tw`border-grey-lightest uppercase hover:border-grey outline-none font-bold py-2 px-4 rounded`}
    }
  }
`

const Row = styled.div`
  ${tw`flex flex-wrap w-full justify-between mb-24`}
`

function BioCard({ author, twitter, piclink, bio }) {
  return (
    <CardWrapper>
      <div className="wrapper">
        <Row>
          <img className="avatar" src={piclink} alt={author} />
        </Row>
        <Bio>
          <Content>
            <Author>{author}</Author>
            <Details>{bio}</Details>
          </Content>
        </Bio>
      </div>
      <div className="footer">
        <button onClick={() => window.open(twitter, '_blank')}>Follow</button>
      </div>
    </CardWrapper>
  )
}

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
    <Row>
      <BioCard
        {...{ author, piclink, bio }}
        twitter={`https://twitter.com/${twitter}`}
      />
      <BioCard
        author={orgaName}
        piclink={orgaPicLink}
        bio={orgaBio}
        twitter={'https://www.novvum.io'}
      />
    </Row>
  )
}

export default CustomBio
