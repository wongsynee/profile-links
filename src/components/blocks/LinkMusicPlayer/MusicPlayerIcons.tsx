import React from 'react'

import { PlatformName } from '../../../constants/enums'
import Bandcamp from '../../../images/bandcamp@2x.png'
import Tidal from '../../../images/tidal@2x.png'
import Deezer from '../../../images/deezer@2x.png'
import YouTubeMusic from '../../../images/youtube-music@2x.png'
import Soundcloud from '../../../images/soundcloud@2x.png'
import AppleMusic from '../../../images/apple-music@2x.png'
import Spotify from '../../../images/spotify@2x.png'
import { Icons } from './LinkMusicPlayer.style'

interface IMusicPlayerIconsProps {
  name: string;
}

const renderIcons = (name: string) => {
  switch (name) {
    case PlatformName.Bandcamp:
      return <Icons src={Bandcamp} alt={name} />
    case PlatformName.Tidal:
      return <Icons src={Tidal} alt={name} />
    case PlatformName.Deezer:
      return <Icons src={Deezer} alt={name} />
    case PlatformName.YouTubeMusic:
      return <Icons src={YouTubeMusic} alt={name} />
    case PlatformName.Soundcloud:
      return <Icons src={Soundcloud} alt={name} />
    case PlatformName.AppleMusic:
      return <Icons src={AppleMusic} alt={name} />
    case PlatformName.Spotify:
      return <Icons src={Spotify} alt={name} />
  }
}

const MusicPlayerIcons = ({
  name,
}: IMusicPlayerIconsProps) => {
  return (
    <>
      {renderIcons(name)}
    </>
  )
}

export default MusicPlayerIcons