import { connect } from 'react-redux';
import ChannelsMain from './channels_main';
import { deleteSession } from '../../actions/session_action';

const msp = (state, ownProps) => ({

})

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession()))
})

export default connect(null, mdp)(ChannelsMain)