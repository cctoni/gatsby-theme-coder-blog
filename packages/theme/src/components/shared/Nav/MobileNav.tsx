import React, { Component, forwardRef } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import ClickOutHandler from 'react-onclickout'
import posed from 'react-pose'

// Local
import Logo from '../../../vectors/Logo'
import Close from '../../../vectors/Close'
import Container from '../Container'
import { TextItem } from './styles'
import NextLink from '../NextLink'

export default class MobileNav extends Component<import('.').NavProps> {
  state = { open: false, openItem: '' }

  render() {
    const { color = 'light', lessPadding, sidePadding } = this.props
    const { open, openItem } = this.state
    const featuresOpen = openItem === 'features'
    const productsOpen = openItem === 'products'

    return (
      <Container lessPadding={lessPadding} sidePadding={sidePadding}>
        <ClickOutHandler
          onClickOut={() => {
            if (open) {
              this.setState({
                open: false,
              })
            }
          }}
        >
          <Wrapper>
            <Stack>
              <LogoLinkWrapper href="/" color={color}>
                <Logo />
              </LogoLinkWrapper>

              <MenuTrigger
                color={color}
                icon={open}
                onClick={() => {
                  this.setState({ open: !open, openItem: '' })
                }}
              >
                {open ? <Close /> : 'Menu'}
              </MenuTrigger>
            </Stack>

            <PosedBox pose={open ? 'open' : 'closed'}>
              <Items>
                <Item>
                  <TextItemBlock
                    active={featuresOpen}
                    onClick={() => {
                      this.setState({
                        openItem: featuresOpen ? '' : 'features',
                      })
                    }}
                  >
                    Features
                  </TextItemBlock>

                  <AnimateHeight duration={250} height={featuresOpen ? 'auto' : 0}>
                    <SubItems>
                      <NextLink href="/features/graphql-api" passHref passActive>
                        <TextSubItemBlock>GraphQL API</TextSubItemBlock>
                      </NextLink>
                      <NextLink href="/features/bindings" passHref passActive>
                        <TextSubItemBlock>Bindings</TextSubItemBlock>
                      </NextLink>
                      <NextLink href="/features/query-engine" passHref passActive>
                        <TextSubItemBlock>Query Engine</TextSubItemBlock>
                      </NextLink>
                      <NextLink href="/features/data-modeling" passHref passActive>
                        <TextSubItemBlock>Data Modeling</TextSubItemBlock>
                      </NextLink>
                      <NextLink href="/features/databases" passHref passActive>
                        <TextSubItemBlock>Supported Databases</TextSubItemBlock>
                      </NextLink>
                    </SubItems>
                  </AnimateHeight>
                </Item>

                <Item>
                  <TextItemBlock
                    active={productsOpen}
                    onClick={() => {
                      this.setState({
                        openItem: productsOpen ? '' : 'products',
                      })
                    }}
                  >
                    Products
                  </TextItemBlock>

                  <AnimateHeight duration={250} height={productsOpen ? 'auto' : 0}>
                    <SubItems>
                      <NextLink href="/cloud" passHref passActive>
                        <TextSubItemBlock>Prisma Cloud</TextSubItemBlock>
                      </NextLink>
                      <NextLink href="/enterprise" passHref passActive>
                        <TextSubItemBlock>Prisma Enterprise</TextSubItemBlock>
                      </NextLink>
                    </SubItems>
                  </AnimateHeight>
                </Item>

                <NextLink href="https://prisma.io/docs" passHref passActive>
                  <TextItemBlock>Docs</TextItemBlock>
                </NextLink>

                <NextLink href="/community" passHref passActive>
                  <TextItemBlock>Community</TextItemBlock>
                </NextLink>

                <NextLink href="/blog" passHref passActive>
                  <TextItemBlock>Blog</TextItemBlock>
                </NextLink>
              </Items>
            </PosedBox>
          </Wrapper>
        </ClickOutHandler>
      </Container>
    )
  }
}

// Styles
const Wrapper = styled.nav`
  width: 100%;
  min-height: 40px;
  padding-top: 32px;
  position: relative;
`

const Stack = styled.div`
  display: flex;
  justify-content: space-between;
`

const LogoLinkWrapper = styled.a`
  fill: ${p => (p.color === 'light' ? 'white' : p.theme.primary)};
`

const MenuTrigger = styled.button<{ color: 'dark' | 'light'; icon: boolean }>`
  background: none;
  border-radius: ${p => p.theme.radius}px;
  border: 2px solid ${p => (p.color === 'dark' ? p.theme.primaryLight3 : p.theme.primaryLight1)};

  height: 40px;
  line-height: 38px;
  padding: 0 ${p => (p.icon ? 14 : 16)}px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 120ms ease;

  color: ${p => (p.color === 'dark' ? p.theme.primaryLight1 : p.theme.primaryLight3)};

  svg {
    fill: ${p => (p.color === 'dark' ? p.theme.primaryLight1 : p.theme.primaryLight3)};
  }
`

const StyledBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 90px;
  width: calc(100% + 32px);
  margin: 0 -16px;
  background: ${p => p.theme.primary};
  border-radius: ${p => p.theme.radiusBig}px;
  padding: 16px 24px;
  box-shadow: 0 9px 25px rgba(0, 0, 0, 0.12);

  transform-origin: top right;
  opacity: 0;
  transform: scale(0);
`

// [TODO]: remove this when migrating to styled-components@4
// this fixes posed error, maybe an earlier version doesn't break
const Box = forwardRef<HTMLElement>((props, ref) => (
  <StyledBox {...props} innerRef={ref as React.RefObject<HTMLElement>} />
))

const PosedBox = posed(Box)({
  closed: { scale: 0, opacity: 0, y: -12 },
  open: { scale: 1, opacity: 1, y: 0 },
})

// Items
const Items = styled.div``

const Item = styled.div`
  display: block;
`

const TextItemBlock = TextItem.extend`
  display: block;
  height: auto;
  line-height: 1;
  padding: 12px 0;
`

const TextSubItemBlock = TextItemBlock.extend`
  &:last-child {
    padding-bottom: 24px;
  }
`

const SubItems = styled.div`
  padding-left: 16px;
  border-bottom: 1px solid ${p => p.theme.primaryLight1};
  margin-bottom: 12px;
`
