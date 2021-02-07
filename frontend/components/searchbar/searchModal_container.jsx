
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import SearchbarModal from './searchModal';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllChannels } from '../../actions/channel_action';
import { allDmsTitle, allChannelTitle} from '../../reducers/channel_selector'

const msp = state => {

  return {
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    allchannels: state.entities.allchannels,
    channels: state.entities.channels,
    allDmsTitle: allDmsTitle(state),
    allChannelTitle: allChannelTitle(state)
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchAllChannels: () => dispatch(fetchAllChannels())

  }

}

export default withRouter(connect(msp, mdp)(SearchbarModal));