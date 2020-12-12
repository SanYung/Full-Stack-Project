import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_action';
import ChannelsMain from './channels_main';
import { deleteSession } from '../../actions/session_action';


const mdp = (dispatch) => {
    return {
        deleteSession: (() => dispatch(deleteSession()))
    }
};

export default connect(null, mdp)(ChannelsMain)