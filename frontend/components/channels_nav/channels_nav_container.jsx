import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_action';
import ChannelNav from './channels_nav';



const mdp = (dispatch) => {
    return {
        fetchChannels: ((channel) => dispatch(fetchChannels(channel))),

    }
};

export default connect(null, mdp)(ChannelNav)