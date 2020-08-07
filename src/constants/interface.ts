import { LinkType } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IProfile {
  name: string;
}

interface ILinkClassic {
  href: string;
}

interface ILinkMusicPlayer {
  embed: string;
  platforms: {
    name: string;
    href: string;
  }[];
}

interface ILinkShow {
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

export interface IData {
  profile?: IProfile;
  links?: ILinks[];
}