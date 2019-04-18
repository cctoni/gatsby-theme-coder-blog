import React, { useState } from 'react'
import styled, { css } from 'styled-components'

// Local
import Container from '../Container'
import EmailField from '../EmailField'

// Icons
import Facebook from '../../../vectors/Facebook'
import GithubLogo from '../../../vectors/GithubLogo'
import Twitter from '../../../vectors/Twitter'
import YouTube from '../../../vectors/YouTube'
import NewsletterForm from './NewsletterForm'
import { mobile } from '../../../utils/styles/media'

const getCurrentYear = () => new Date().getFullYear()
const useCurrentYear = () => useState(getCurrentYear)[0]

export default () => (
  <Wrapper>
    <Container>
      <ColumnsWrapper>
        <NavColumn>
          <ColumnTitle>Products</ColumnTitle>
          <ColumnLink href="/client/client-typescript">Prisma Client</ColumnLink>
          <ColumnLink href="/migrate">Prisma Migrate</ColumnLink>
          <ColumnLink href="/admin">Prisma Admin</ColumnLink>
          <ColumnLink href="/cloud">Prisma Cloud</ColumnLink>
          <ColumnLink href="/enterprise">Prisma Enterprise</ColumnLink>
        </NavColumn>

        <NavColumn>
          <ColumnTitle>Resources</ColumnTitle>
          <ColumnLink href="https://www.prisma.io/docs/">Docs</ColumnLink>
          <ColumnLink href="https://www.prisma.io/docs/-t002/">Get Started</ColumnLink>
          <ColumnLink href="https://www.prisma.io/tutorials/">Tutorials</ColumnLink>
          <ColumnLink href="https://github.com/prisma/prisma-examples" target="_blank">
            Examples
          </ColumnLink>
        </NavColumn>

        <NavColumn>
          <ColumnTitle>Community</ColumnTitle>
          <ColumnLink href="/community">Meet the Community</ColumnLink>
          <ColumnLink href="https://slack.prisma.io">Slack</ColumnLink>
          <ColumnLink href="https://www.prisma.io/forum/">Forum</ColumnLink>
          <ColumnLink href="https://www.graphqlconf.org/" target="_blank">
            Conference
          </ColumnLink>
        </NavColumn>

        <NavColumn>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnLink href="/about">About</ColumnLink>
          <ColumnLink href="/jobs">Jobs</ColumnLink>
          <ColumnLink href="https://prisma.io/blog/">Blog</ColumnLink>
          <ColumnLink href="https://gist.github.com/nikolasburk/c0f34b0cc50d3403e2e0d40c0e6510aa">
            Terms & Privacy
          </ColumnLink>
        </NavColumn>

        <TwinColumnLast>
          <ColumnTitle>Join the Prisma newsletter</ColumnTitle>

          <FormWrapper>
            <NewsletterForm>{props => <EmailField {...props} />}</NewsletterForm>
          </FormWrapper>

          <Social>
            <SocialLink target="_blank" href="https://www.youtube.com/c/PrismaGraphQL">
              <YouTube />
            </SocialLink>
            <SocialLink target="_blank" href="https://github.com/prisma">
              <GithubLogo />
            </SocialLink>
            <SocialLink target="_blank" href="https://twitter.com/prisma">
              <Twitter />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.facebook.com/prisma.io">
              <Facebook />
            </SocialLink>
          </Social>
        </TwinColumnLast>
      </ColumnsWrapper>
      <CopyRight>Prisma © {useCurrentYear()}</CopyRight>
    </Container>
  </Wrapper>
)

// Styles
const Wrapper = styled.footer`
  background: ${p => p.theme.primaryDark1};
  padding-top: 70px;
  padding-bottom: 64px;

  color: ${p => p.theme.primaryLight2};
`

const ColumnsWrapper = styled.nav`
  display: flex;

  ${mobile(css`
    flex-wrap: wrap;
  `)};
`

const NavColumn = styled.div`
  flex-grow: 1.7;
  flex-shrink: 0;

  ${mobile(css`
    flex-basis: 100%;
    padding-bottom: 20px;
    padding-right: 10px;
  `)};
`

const TwinColumnLast = styled.div`
  flex-grow: 2;
  text-align: right;

  ${mobile(css`
    text-align: center;
    padding-bottom: 64px;
    order: -1;
  `)};
`

const ColumnTitle = styled.h3`
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  color: white;
`

const ColumnLink = styled.a`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.3;
  color: ${p => p.theme.primaryLight2};

  &:hover {
    color: ${p => p.theme.primaryLight3};
  }
`

const CopyRight = ColumnLink.withComponent('div').extend`
  text-align: right;

  ${mobile(css`
    padding-top: 24px;
    text-align: center;
  `)}
`

const Social = styled.div`
  margin-top: 26px;
`

const SocialLink = styled.a`
  padding-right: 12px;
  padding-left: 12px;

  &:last-child {
    padding-right: 0;
  }

  &:first-child {
    padding-left: 0;
  }

  svg {
    height: 29px;
    width: auto;

    path {
      fill: ${p => p.theme.primaryLight2};
      transition: fill 150ms ease;
    }
  }

  &:hover {
    svg path {
      fill: ${p => p.theme.primaryLight3};
    }
  }
  }
`

const FormWrapper = styled.span`
  display: inline-block;
  width: 340px;

  ${mobile(css`
    max-width: 340px;
    width: auto;
  `)};
`
