import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      default: string;
      circle: string;
    };
    colours: {
      white: string;
      porcelain: string;
      iron: string;
      mineShaft: string;
      primary: string;
      secondary: string;
    };
    font: {
      primary: string;
    };
    fontSize: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      regular: string;
      bold: string;
    };
    spacer: {
      maxWidth: string;
    };
    transition: {
      speed: {
        default: string;
        fast: string;
      };
    };
  }
}