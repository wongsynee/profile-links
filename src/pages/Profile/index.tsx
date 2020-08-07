import React, { useEffect } from 'react'

import {
  IProfile,
  ILinks,
} from '../../constants/interface'
import CenteredBlock from '../../components/blocks/CenteredBlock'
import Header from '../../components/blocks/Header'
import Footer from '../../components/blocks/Footer'

interface IProfileProps {
  profile?: IProfile;
  links?: ILinks[];
  getData(): void;
}

const Profile = ({
  profile,
  links,
  getData,
}: IProfileProps) => {
  // Get data from the `/data` endpoint.
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <CenteredBlock>
        {profile && (
          <Header profile={profile} />
        )}
        <Footer />
      </CenteredBlock>
    </>
  )
}

export default Profile
