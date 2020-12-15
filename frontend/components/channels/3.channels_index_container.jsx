import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels} from '../../actions/channel_action';
import ChannelIndex from './4.channel_index';
import { openModal } from '../../actions/modal_actions'


const msp = (state) => {
    return{
    channels: Object.values(state.entities.channels),
    userId: state.session.currentUser.id,
    user: state.entities.users[state.session.currentUser.id]
}}

const mdp = (dispatch) => ({
    fetchChannels: ((userId) => dispatch(fetchChannels(userId))),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(ChannelIndex)