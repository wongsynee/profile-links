import React from 'react'

import { ILinks } from '../../../constants/interface'
import { LinkType } from '../../../constants/enums'

interface ILinksProps {
  links: ILinks[];
}

const Links = ({
  links,
}: ILinksProps) => {
  return (
    <>
    {
      links.map(link => {
        const { type } = link
        switch (type) {
          case LinkType.MusicPlayer:
            return <span>Music player</span>
          case LinkType.Shows:
            return <span>Shows</span>
          default:
            return <span>Classic</span>
        }
      })
    }
    </>
  )
}

export default Links