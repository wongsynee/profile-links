import { LinkType } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IProfile {
  name: string;
}

export interface ILinkClassic {
  href: string;
}

export interface ILinkMusicPlayer {
  embed: string;
  platforms: {
    name: string;
    href: string;
  }[];
}

export interface ILinkShow {
  shows: {
    date: string;
    venue: string;
    href?: string;
  }[];
}

export interface ILinks extends ILinkClassic, ILinkMusicPlayer, ILinkShow {
  type: LinkType;
  text: string;
}

export interface ITheme {
  colours: {
    primary: string;
    secondary: string;
  };
}

export interface IData {
  profile?: IProfile;
  theme?: ITheme;
  links?: ILinks[];
}