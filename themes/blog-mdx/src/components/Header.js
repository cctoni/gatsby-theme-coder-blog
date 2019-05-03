import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const Nav = styled.nav`
  ${tw`flex w-screen items-center justify-between flex-wrap bg-white p-6`}
`

const Brand = styled.div`
  ${tw`flex items-center flex-no-shrink mr-6`}
  img {
    ${tw`w-8 m-2`}
  }
  span {
    ${tw`font-semibold text-xl tracking-tight`}
  }
`

const LinkWrapper = styled.div`
  ${tw`"w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
`

const NavLink = styled(Link)`
  ${tw`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue mr-4`}
`
const Header = ({ links }) => (
  <Nav>
    <Brand>
      <img
        src="https://art.pixilart.com/bee925e8d4d73f4.png"
        alt="Novvum Blog"
      />
      <span>Blog</span>
    </Brand>
    <LinkWrapper>
      {links &&
        links.map(l => (
          <NavLink key={l.link} to={l.link}>
            {l.title}
          </NavLink>
        ))}
    </LinkWrapper>
  </Nav>
)

export default Header
