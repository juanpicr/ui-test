import React from 'react'
import { Link } from 'constants/types'
import facebookIcon from '../assets/img/facebook.svg'
import twitterIcon from '../assets/img/twitter.svg'

export const navLinks: Link[] = [
  { to: '/pastTrials', label: 'Past Trials' },
  { to: '/howItWorks', label: 'How It Works' },
  { to: '/auth', label: 'Login / Sign Up' }
]

export const footerLinks: Link[] = [
  { to: '/termsAndConditions', label: 'Terms and Conditions' },
  { to: '/privacyPolicy', label: 'Privacy Policy' },
  { to: '/contactUs', label: 'Contact Us' }
]

// TODO: handle external links
export const footerSocial: Link[] = [
  { to: 'https://www.facebook.com/', label: <img src={facebookIcon} alt="facebook"/> },
  { to: 'https://www.twitter.com/', label: <img src={twitterIcon} alt="twitter"/> }
]
