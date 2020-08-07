import React from 'react'

import { ILinkClassic } from '../../../constants/interface'
import { Link } from './LinkClassic.style'

interface ILinkClassicProps extends ILinkClassic {
  text: string;
}

const LinkClassic = ({
  href,
  text,
}: ILinkClassicProps) => {
  return (
    <Link
      target="_blank"
      href={href}
    >
      {text}
    </Link>
  )
}

export default LinkClassic