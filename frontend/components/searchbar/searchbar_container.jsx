
import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    users: state.entities.users,
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
    messages: state.entities.posts,
    currentUserEmail: state.session.currentUser.email
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }

}

export default connect(msp, mdp)(Searchbar);