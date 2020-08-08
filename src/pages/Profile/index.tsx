import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme as staticTheme } from '../../theme/Theme'
import {
  IProfile,
  ITheme,
  ILinks,
} from '../../constants/interface'
import CenteredBlock from '../../components/elements/CenteredBlock'
import Header from '../../components/blocks/Header'
import Links from '../../components/blocks/Links'
import Footer from '../../components/blocks/Footer'

interface IProfileProps {
  profile?: IProfile;
  theme?: ITheme;
  links?: ILinks[];
  getData(): void;
}

const Profile = ({
  profile,
  theme,
  links,
  getData,
}: IProfileProps) => {
  // Get data from the `/data` endpoint.
  useEffect(() => {
    getData()
  }, [getData])

  /*
    Static theme is the default, when data on the
    colours returns from the API, the colours are
    then combined to be passed to the ThemeProvider.
  */
  const combinedTheme = {
    ...staticTheme,
    colours: {
      ...staticTheme.colours,
      ...theme && theme.colours,
    },
  }

  return (
    <ThemeProvider theme={combinedTheme}>
      <CenteredBlock>
        {profile && (
          <Header profile={profile} />
        )}
        {links && (
          <Links links={links} />
        )}
        <Footer />
      </CenteredBlock>
    </ThemeProvider>
  )
}

export default Profile
