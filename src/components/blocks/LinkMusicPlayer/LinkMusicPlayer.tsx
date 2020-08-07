import React from 'react'

import { ILinkMusicPlayer } from '../../../constants/interface'
import Button from '../../elements/Button'

interface ILinkMusicPlayerProps extends ILinkMusicPlayer {
  text: string;
}

const LinkMusicPlayer = ({
  text,
  embed,
  platforms,
}: ILinkMusicPlayerProps) => {
  return (
    <Button>Music Player</Button>
  )
}

export default LinkMusicPlayer