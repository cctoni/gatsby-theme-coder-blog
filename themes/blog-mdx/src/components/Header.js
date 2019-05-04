import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const Nav = styled.nav`
  ${tw`flex w-screen items-center justify-between flex-wrap bg-white px-6 py-2`}
`

const Brand = styled.div`
  ${tw`flex items-center flex-no-shrink`}
  img {
    ${tw`w-8 my-1 mr-1`}
  }
  span {
    ${tw`font-semibold text-xl tracking-tight`}
  }
`

const LinkWrapper = styled.div`
  ${tw`"block w-auto`}
`

const NavLink = styled(Link)`
  ${tw`block lg:inline-block text-black hover:text-blue mr-4`}
`
const Header = ({ links, title }) => (
  <Nav>
    <Brand>
      <img
        src="https://art.pixilart.com/bee925e8d4d73f4.png"
        alt="Novvum Blog"
      />
      <span>{title}</span>
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
