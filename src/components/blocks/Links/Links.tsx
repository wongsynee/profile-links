import React from 'react'

import { ILinks } from '../../../constants/interface'
import { LinkType } from '../../../constants/enums'
import LinkClassic from '../LinkClassic'
import LinkMusicPlayer from '../LinkMusicPlayer'
import LinkShows from '../LinkShows'
import {
  LinksWrapper,
  LinkWrapper,
} from './Links.style'

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
          platforms,
          shows,
        } = link
        switch (type) {
          case LinkType.MusicPlayer:
            return (
              <LinkWrapper key={`${type}-${index}`}>
                <LinkMusicPlayer
                  text={text}
                  platforms={platforms}
                />
              </LinkWrapper>
            )
          case LinkType.Shows:
            return (
              <LinkWrapper key={`${type}-${index}`}>
                <LinkShows
                  text={text}
                  shows={shows}
                />
              </LinkWrapper>
            )
          default:
            return (
              <LinkWrapper key={`${type}-${index}`}>
                <LinkClassic
                  text={text}
                  href={href}
                />
              </LinkWrapper>
            )
        }
      })
    }
    </LinksWrapper>
  )
}

export default Links