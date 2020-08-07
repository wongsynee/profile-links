import React from 'react'

import { IProfile } from '../../../constants/interface'
import ProfilePhoto from '../../../images/profile.jpg'
import {
  HeaderWrapper,
  ImageCircleWrapper,
  Image,
  Name,
} from './Header.style'

interface IHeaderProps {
  profile: IProfile;
}

const Header = ({
  profile: { name },
}: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <ImageCircleWrapper>
        <Image
          src={ProfilePhoto}
          alt={`${name}'s profile photo`}
        />
      </ImageCircleWrapper>
      <Name>
        @{name}
      </Name>
    </HeaderWrapper>
  )
}

export default Header