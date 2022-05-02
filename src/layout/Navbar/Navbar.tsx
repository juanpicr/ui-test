import React from 'react'
// components
import { MaxCentered } from 'components'
// Styled
import * as Styled from './Navbar.styled'
// constants
import { navLinks } from 'constants/index'
// assets
const hamburger = require('assets/img/hamburger.svg').default as string

const Navbar = () => {
  return (
    <Styled.Navbar role="navigation">
      <MaxCentered>
        <Styled.Logo>Rule of thumb.</Styled.Logo>
        <Styled.Hamburger><img src={hamburger} alt="menu"/></Styled.Hamburger>
        <Styled.NavLinks links={navLinks} searchEnabled />
      </MaxCentered>
    </Styled.Navbar>
  )
}

export default Navbar
