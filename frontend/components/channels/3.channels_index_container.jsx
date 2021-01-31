import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_action';
import { fetchUsers } from '../../actions/session_action'
import ChannelIndex from './4.channel_index';
import { openModal } from '../../actions/modal_actions'
import { deleteSession } from '../../actions/session_action'


const msp = (state) => {
    return {
        channels: Object.values(state.entities.channels),
        currentUser: state.session.currentUser.id,
        user: state.entities.users[state.session.currentUser.id]
    }
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteSession: (() => dispatch(deleteSession()))
    
});

export default connect(msp, mdp)(ChannelIndex)