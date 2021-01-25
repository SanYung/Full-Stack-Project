import React from 'react';
import { connect } from 'react-redux';
import { fetchUserChannels} from '../../actions/channel_action';
import ChannelIndex from './4.channel_index';
import { openModal } from '../../actions/modal_actions'
import { deleteSession } from '../../actions/session_action'


const msp = (state) => {
    return{  
    channels: Object.values(state.entities.channels),
    userId: state.session.currentUser.id,
    user: state.entities.users[state.session.currentUser.id]
}}

const mdp = (dispatch) => ({
    fetchUserChannels: ((userId) => dispatch(fetchUserChannels(userId))),
    openModal: modal => dispatch(openModal(modal)),
    deleteSession: (() => dispatch(deleteSession())),
});

export default connect(msp, mdp)(ChannelIndex)