import React from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../../../utils/styles/media'

import Nav from './Nav'
import MobileNav from './MobileNav'

export default ({ color, lessPadding, sidePadding }: import('.').NavProps) => (
  <>
    <HideOnMobile>
      <Nav color={color} lessPadding={lessPadding} sidePadding={sidePadding} />
    </HideOnMobile>
    <ShowOnMobile>
      <MobileNav color={color} lessPadding={lessPadding} sidePadding={sidePadding} />
    </ShowOnMobile>
  </>
)

// Styles
const ShowOnMobile = styled.div`
  display: none;

  ${mobile(css`
    display: block;
  `)};
`

const HideOnMobile = styled.div`
  ${mobile(css`
    display: none;
  `)};
`
