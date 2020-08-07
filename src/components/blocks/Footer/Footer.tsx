import React from 'react'

import {
  FooterWrapper,
  Image
} from './Footer.style'
import Logo from '../../../images/logo@2x.png'

const Footer = () => {
  return (
    <FooterWrapper>
      <Image
        src={Logo}
        alt="linktree"
      />
    </FooterWrapper>
  )
}

export default Footer