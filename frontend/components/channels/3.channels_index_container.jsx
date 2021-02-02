import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels, fetchAllChannels } from '../../actions/channel_action'
import { fetchUsers } from '../../actions/session_action'
import ChannelIndex from './4.channel_index'
import { openModal } from '../../actions/modal_actions'
import { deleteSession } from '../../actions/session_action'
import { fetchMemberships } from '../../actions/membership_action';


const msp = (state) => {
    return {
        channels: Object.values(state.entities.channels),
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser.id],
        memberships: state.entities.memberships
    }
}

const mdp = (dispatch) => ({
    fetchMemberships: () => dispatch(fetchMemberships()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteSession: (() => dispatch(deleteSession())),
    fetchAllChannels: () => dispatch(fetchAllChannels())
});

export default connect(msp, mdp)(ChannelIndex)