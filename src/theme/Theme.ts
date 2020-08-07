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
    fiord: '#455A64',
    shamrock: '#39E09B',
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