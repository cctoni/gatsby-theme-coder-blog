import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'
import { AuthorMetaProps } from '../../../types'

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 1rem;
  ${mobile(
    css`
      align-items: flex-start;
      flex-direction: column;
    `,
  )}
`

const Separator = styled.div`
  margin: 0 1.5rem;
  flex: 0 0 1px;
  min-height: 100%;
  background-color: ${p => p.theme.primaryLight3};
  ${mobile(
    css`
      background: none;
      min-height: 0;
      flex: 0 0 1rem;
    `,
  )}
`

const SingleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 1rem;
  object-fit: cover;
  flex: 0 0 2rem;
  background-color: ${p => p.theme.primaryLight4};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-self: stretch;
`

const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${p => p.theme.primaryDark1};
`

const UserLink = styled.a`
  font-size: 0.875rem;
  color: ${p => p.theme.primaryLight2};
  margin-top: 0.125rem;
`

export const query = graphql`
  fragment AuthorMeta on AuthorData {
    name
    username
    twitter
    avatar
  }
`

const SingleAuthor = ({ name, username, twitter, avatar }: AuthorMetaProps) => (
  <SingleWrapper>
    {avatar && <Avatar src={avatar} alt={username} />}
    <Column>
      {name && <Name>{name}</Name>}
      {twitter && <UserLink href={`https://twitter.com/${twitter}`}>@{twitter}</UserLink>}
    </Column>
  </SingleWrapper>
)

const AuthorMeta = ({ authors = [] }: { authors?: AuthorMetaProps[] }) => (
  <Wrapper>
    {authors.map((author, index) => (
      <Fragment key={author.username}>
        {index > 0 && <Separator />}
        <SingleAuthor {...author} />
      </Fragment>
    ))}
  </Wrapper>
)

export default AuthorMeta
