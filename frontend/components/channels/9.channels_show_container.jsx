import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel, deleteChannel } from '../../actions/channel_action';
import ChannelShow from './8.channels_show';


const msp = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
})

const mdp = (dispatch) => ({
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    deleteChannel: ((channelId) => dispatch(deleteChannel(channelId)))
})

export default connect(msp, mdp)(ChannelShow)