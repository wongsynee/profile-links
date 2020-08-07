import { connect } from 'react-redux'

import {
  IProfileState,
  selectors,
} from '../../reducers'
import { GET_DATA } from '../../actions'

import Profile from '.'

const mapStateToProps = (state: IProfileState) => (
  {
    profile: selectors.profile(state),
    links: selectors.links(state),
  }
)

const actionCreators = {
  getData: GET_DATA.request,
}

export default connect(mapStateToProps,actionCreators)(Profile)
