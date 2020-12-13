import React from 'react';
import { connect } from 'react-redux';
import {fetchChannels , fetchChannel} from '../../actions/channel_action';
import ChannelIndex from './channel_index';

const msp = (state) => {
    return{
    channels: Object.values(state.entities.channels),
    id: state.session.currentUser.id,
    user: state.entities.users[state.session.currentUser.id]
}}

const mdp = (dispatch) => ({
    fetchChannels: ((id) => dispatch(fetchChannels(id)))
});

export default connect(msp, mdp)(ChannelIndex)