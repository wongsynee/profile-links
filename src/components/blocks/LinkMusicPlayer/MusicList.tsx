import React, { useState } from 'react'

import List from '../../elements/List'
import Chevron from '../../elements/Chevron'
import MusicPlayerIcons from './MusicPlayerIcons'
import {
  IframeWrapper,
  Button,
} from './LinkMusicPlayer.style'

interface IMusicListProps {
  platforms: {
    name: string;
    embed: string;
    href: string;
  }[];
}

const MusicList = ({
  platforms,
}: IMusicListProps) => {
  const [embedFrame, setEmbedFrame] = useState<string>('')

  return (
    <>
      {embedFrame && (
        <IframeWrapper dangerouslySetInnerHTML={{__html: embedFrame}} />
      )}
      <List>
        {
          platforms.map((platform, index) => {
            const { name, embed, href } = platform
            return (
              <li key={`${name}-${index}`}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <MusicPlayerIcons name={name} />
                </a>
                <Button onClick={() => setEmbedFrame(embed)}>
                  {name}
                  <Chevron />
                </Button>
              </li>
            )
          })
        }
      </List>
    </>
  )
}

export default MusicList