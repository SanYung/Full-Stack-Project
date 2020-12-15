import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import ChannelHome from './1.channels_home';
import { fetchChannel } from '../../actions/channel_action';
import {deleteSession} from '../../actions/session_action'

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession())),
    // fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
})

export default withRouter(connect(null, mdp)(ChannelHome))