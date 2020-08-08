import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: {
    default: '.5rem',
    circle: '50%',
  },
  colours: {
    white: '#FFFFFF',
    porcelain: '#F5F7F8',
    iron: '#DADEE0',
    mineShaft: '#222222',
    primary: '#39E09B',
    secondary: '#455A64',
  },
  font: {
    primary: 'Raleway, sans-serif',
  },
  fontSize: {
    default: '1.6rem',
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
  },
  fontWeight: {
    regular: '400',
    bold: '700',
  },
  spacer: {
    maxWidth: '60rem',
  },
  transition: {
    speed: {
      default: '300ms',
      fast: '100ms',
      medium: '1000ms',
      slow: '2000ms',
    },
  },
}

const themeBreakpoints = {
  breakpoints: {
    extraLarge: 1440,
    large: 992,
    medium: 768,
    small: 480,
  },
}

export { theme, themeBreakpoints }