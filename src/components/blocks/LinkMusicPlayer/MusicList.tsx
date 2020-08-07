import React from 'react'

import List from '../../elements/List'
import Chevron from '../../elements/Chevron'
import MusicPlayerIcons from './MusicPlayerIcons'
import { PlatformLink } from './LinkMusicPlayer.style'

interface IMusicListProps {
  platforms: {
    name: string;
    href: string;
  }[];
}

const MusicList = ({
  platforms,
}: IMusicListProps) => {
  return (
    <List>
      {
        platforms.map((platform, index) => {
          const { name, href } = platform
          return (
            <li key={`${name}-${index}`}>
              <PlatformLink href={href} target="_blank">
                <MusicPlayerIcons name={name} />
                {name}
                <Chevron />
              </PlatformLink>
            </li>
          )
        })
      }
    </List>
  )
}

export default MusicList