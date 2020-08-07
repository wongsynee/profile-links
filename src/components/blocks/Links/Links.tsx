import React from 'react'

import { ILinks } from '../../../constants/interface'
import { LinkType } from '../../../constants/enums'
import LinkClassic from '../LinkClassic'
import { LinksWrapper } from './Links.style'

interface ILinksProps {
  links: ILinks[];
}

const Links = ({
  links,
}: ILinksProps) => {
  return (
    <LinksWrapper>
    {
      links.map(link => {
        const {
          type,
          href,
          text,
        } = link
        switch (type) {
          case LinkType.MusicPlayer:
            return <span>Music player</span>
          case LinkType.Shows:
            return <span>Shows</span>
          default:
            return (
              <LinkClassic
                href={href}
                text={text}
              />
            )
        }
      })
    }
    </LinksWrapper>
  )
}

export default Links