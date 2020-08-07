export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IProfile {
  name: string;
}

interface ILinkClassic {
  text: string;
  href: string;
}

interface ILinkMusicPlayer {
  text: string;
  embed: string;
  platforms: {
    name: string;
    href: string;
  }[];
}

interface ILinkShow {
  text: string;
  shows: {
    date: string;
    venue: string;
    href?: string;
  }[];
}

export interface ILinks {
  classic: ILinkClassic;
  musicPlayer: ILinkMusicPlayer;
  shows: ILinkShow;
}

export interface IData {
  profile?: IProfile;
  links?: ILinks[];
}