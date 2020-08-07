import React, { useState } from 'react'

import { ILinkShow } from '../../../constants/interface'
import CollapsiblePanel from '../../elements/CollapsiblePanel'
import Button from '../../elements/Button'
import ShowsList from './ShowsList'

interface ILinkShowsProps extends ILinkShow {
  text: string;
}

const LinkShows = ({
  text,
  shows,
}: ILinkShowsProps) => {
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
        <ShowsList shows={shows} />
      </CollapsiblePanel>
    </>
  )
}

export default LinkShows