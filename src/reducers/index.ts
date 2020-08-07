import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import {
  IData,
  IProfile,
  ILinks,
} from '../constants/interface'
import { SET_DATA } from '../actions'

export interface IProfileState {
  data?: IData;
  profile?: IProfile;
  links?: ILinks[];
}

const initialState: IProfileState = {
  data: undefined,
  profile: undefined,
}

const reducer = (
  state = initialState,
  action: IAction<any>,
) => {
  return (
    produce(state, draft => {
      switch (action.type) {
        case SET_DATA:
          draft.data = action.payload
          break
      }
    })
  )
}

const dataSelector = (state: IProfileState) => state.data

const dataState = createSelector(
  [dataSelector],
  data => data,
)

const profileState  = createSelector(
  [dataSelector],
  data => data && data.profile,
)

const linksState  = createSelector(
  [dataSelector],
  data => data && data.links,
)

const selectors = {
  data: dataState,
  profile: profileState,
  links: linksState,
}

export { reducer, selectors }