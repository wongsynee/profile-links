import React from 'react'

import { ILinkClassic } from '../../../constants/interface'
import Link from '../../elements/Link'

interface ILinkClassicProps extends ILinkClassic {
  text: string;
}

const LinkClassic = ({
  text,
  href,
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