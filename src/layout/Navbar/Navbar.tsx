import React from 'react'
// components
import { MaxCentered } from 'components'
// Styled
import * as Styled from './Navbar.styled'
// assets
import hamburger from 'assets/img/hamburger.svg'
// constants
import { navLinks } from 'constants/index'

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
