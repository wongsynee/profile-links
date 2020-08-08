import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store'
import { GlobalStyle } from './theme/Global.style'
import { theme } from './theme/Theme'
import Profile from './pages/Profile/container'

const App = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <title>Profile Links</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Profile />
      </ThemeProvider>
    </Provider>
  )
}

export default App
