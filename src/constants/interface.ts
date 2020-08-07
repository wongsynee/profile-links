import { LinkType } from './enums'

export interface IAction<P> {
  type: string;
  payload: P;
}

export interface IProfile {
  name: string;
}

export interface ILink {
  [key in LinkType]: {

  }
}

// ## NOTE: Update types here.
export interface IData {
  profile?: IProfile;
  links?: any;
}