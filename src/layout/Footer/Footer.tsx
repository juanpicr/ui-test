import React from 'react'

// Styled
import * as Styled from './Footer.styled'

// constants
import { footerLinks, footerSocial } from 'constants/index'

const Footer = () =>
  <Styled.Footer>
    <Styled.FooterLinks links={footerLinks}/>
    <Styled.FooterSocial links={footerSocial} title='Follow us' />
  </Styled.Footer>

export default Footer
