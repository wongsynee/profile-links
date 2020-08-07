import React, { useState } from 'react'

import { ILinkMusicPlayer } from '../../../constants/interface'
import CollapsiblePanel from '../../elements/CollapsiblePanel'
import Button from '../../elements/Button'
import MusicList from './MusicList'
import { IframeWrapper } from './LinkMusicPlayer.style'

interface ILinkMusicPlayerProps extends ILinkMusicPlayer {
  text: string;
}

const LinkMusicPlayer = ({
  text,
  embed,
  platforms,
}: ILinkMusicPlayerProps) => {
  const [isPanelCollapsed, setIsPanelCollapsed] = useState<boolean>(true)

  return (
    <>
      <Button onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}>
        {text}
      </Button>
      <CollapsiblePanel
        aria-hidden={isPanelCollapsed}
        isPanelCollapsed={isPanelCollapsed}
      >
        <IframeWrapper dangerouslySetInnerHTML={{__html: embed}} />
        <MusicList platforms={platforms} />
      </CollapsiblePanel>
    </>
  )
}

export default LinkMusicPlayer