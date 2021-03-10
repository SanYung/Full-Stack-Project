
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchbarModal from './searchModal';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllChannels } from '../../actions/channel_action';
import { allDmsTitle, currentUserSearch} from '../../reducers/channel_selector'

const msp = state => {

  return {
    userss: state.entities.users,
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    allchannels: state.entities.allchannels,
    channels: state.entities.channels,
    allDmsTitle: allDmsTitle(state),
    memberships: Object.values(state.entities.memberships),
    currentUserSearch: currentUserSearch(state),
    photo1: window.profileURL2
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchAllChannels: () => dispatch(fetchAllChannels())

  }

}

export default withRouter(connect(msp, mdp)(SearchbarModal));