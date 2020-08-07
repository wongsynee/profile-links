import React from 'react'

import { ILinks } from '../../../constants/interface'
import { LinkType } from '../../../constants/enums'
import LinkClassic from '../LinkClassic'
import LinkMusicPlayer from '../LinkMusicPlayer'
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
      links.map((link, index) => {
        const {
          type,
          href,
          text,
          embed,
          platforms,
        } = link
        switch (type) {
          case LinkType.MusicPlayer:
            return (
              <LinkMusicPlayer
                key={`${type}-${index}`}
                text={text}
                embed={embed}
                platforms={platforms}
              />
            )
          case LinkType.Shows:
            return <span key={`${type}-${index}`}>Shows</span>
          default:
            return (
              <LinkClassic
                key={`${type}-${index}`}
                text={text}
                href={href}
              />
            )
        }
      })
    }
    </LinksWrapper>
  )
}

export default Links