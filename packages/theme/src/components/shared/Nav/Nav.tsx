import React, { PureComponent } from 'react'

// Local
import {
  Wrapper,
  InnerWrapper,
  ItemsWrapper,
  SubItemsWrapper,
  LogoWrapper,
  Space,
  TextItem,
  Item,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
} from './styles'
import Container from '../Container'
import Button from '../Button'
import NextLink from '../NextLink'

// Vectors
import Logo from '../../../vectors/Logo'

class Nav extends PureComponent<import('.').NavProps> {
  render() {
    const { color = 'light', subItems, lessPadding } = this.props

    return (
      <Wrapper>
        <Container lessPadding={lessPadding}>
          <InnerWrapper>
            <ItemsWrapper>
              <LogoWrapper href="/" color={color}>
                <Logo />
              </LogoWrapper>

              <Space />

              <DropdownWrapper>
                <NextLink activeFor="/products" passActive passHref>
                  <TextItem color={color} padding>
                    Products
                  </TextItem>
                </NextLink>
                <Dropdown color={color}>
                  <DropdownItem color={color} href="/client/client-javascript">
                    Prisma Client
                  </DropdownItem>
                  <DropdownItem color={color} href="/migrate">
                    Prisma Migrate
                  </DropdownItem>
                  <DropdownItem color={color} href="/admin">
                    Prisma Admin
                  </DropdownItem>
                  <NextLink href="/cloud" passActive passHref>
                    <DropdownItem color={color}>Prisma Cloud</DropdownItem>
                  </NextLink>
                  <NextLink href="/enterprise" passActive passHref>
                    <DropdownItem color={color}>Prisma Enterprise</DropdownItem>
                  </NextLink>
                </Dropdown>
              </DropdownWrapper>

              <NextLink href="https://prisma.io/docs" passHref passActive>
                <TextItem color={color}>Docs</TextItem>
              </NextLink>

              <NextLink href="/community" passHref passActive>
                <TextItem color={color}>Community</TextItem>
              </NextLink>

              <NextLink href="/blog" passHref passActive>
                <TextItem color={color}>Blog</TextItem>
              </NextLink>

              <Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.prisma.io/docs/quickstart/">
                  <Button size="medium" type="outline" color={color}>
                    Get Started
                  </Button>
                </a>
              </Item>
            </ItemsWrapper>

            {subItems && (
              <SubItemsWrapper color={color}>
                {subItems.map(({ title, ...subItem }, i) => (
                  <NextLink passHref passActive {...subItem} key={i}>
                    <TextItem color={color}>{title}</TextItem>
                  </NextLink>
                ))}
              </SubItemsWrapper>
            )}
          </InnerWrapper>
        </Container>
      </Wrapper>
    )
  }
}

export default Nav
