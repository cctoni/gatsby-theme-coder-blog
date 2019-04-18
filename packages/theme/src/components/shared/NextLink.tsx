import React, { PureComponent } from 'react'
import withRouter, { WithRouterProp } from '../../utils/withRouter'

/*
This is an attempt at a backwards compatible next/link component.
next/link receives a child anchor, that receives the href prop by clonning.

Gatsby, instead, provides a Link component that renders an anchor, and doesn't rely on cloning the child element.

The original implementation is on the homepage-v5 repo, under shared/Link.
*/

type ChildProps = { href?: string; active?: boolean }
type NextLinkApi = { passActive?: boolean; activeFor?: string; passHref?: boolean }
type LinkProps = NextLinkApi & WithRouterProp & { href?: string; children: React.ReactElement<any> }

const matches = (pathname: string, substring?: string) => pathname === substring || pathname.includes(`${substring}/`)
const isActive = ({ router, activeFor, href }: LinkProps) => matches(router.pathname, activeFor || href)

class LinkWithoutRouter extends PureComponent<LinkProps> {
  render() {
    const { children, passActive, passHref, href } = this.props
    if (!passActive && !passHref) return children

    const childProps: ChildProps = {}
    if (passActive) childProps.active = isActive(this.props)
    if (passHref) childProps.href = href

    return React.cloneElement(children, childProps)
  }
}

export const Link = withRouter(LinkWithoutRouter)
export default Link
