import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import './layout.css'
import Header from './Header'

export const Container = styled.div`
  ${tw`container mx-auto max-w-lg px-4`}
`
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <>
        <Header
          title={title}
          links={[
            {
              title: 'Home',
              link: '/',
            },
          ]}
        />
        {children}
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.gatsbyjs.org">Novvum</a>
        </footer>
      </>
    )
  }
}

export default Layout
