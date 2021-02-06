import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels, fetchAllChannels } from '../../actions/channel_action'
import { fetchMemberships }from '../../actions/membership_action'
import { fetchUsers } from '../../actions/session_action'
import ChannelIndex from './2.channel_index'
import { openModal } from '../../actions/modal_actions'

const msp = (state) => {
    return {
        channels: Object.values(state.entities.channels),
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser.id],
        memberships: state.entities.memberships
    }
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteSession: (() => dispatch(deleteSession())),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchMemberships: () => dispatch(fetchMemberships())
});

export default connect(msp, mdp)(ChannelIndex)