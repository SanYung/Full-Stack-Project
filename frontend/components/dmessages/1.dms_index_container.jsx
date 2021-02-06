import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_action'
import { fetchChannels, fetchAllChannels, receiveChannel } from '../../actions/channel_action'
import DmsIndex from './1.dms_index'
import { openModal } from '../../actions/modal_actions'
import { fetchMemberships } from '../../actions/membership_action'



const msp = (state) => {
    return {
        currentUser: state.session.currentUser,
        channels: Object.values(state.entities.channels),
        memberships: state.entities.memberships,

    }
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: modal => dispatch(openModal(modal)),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchMemberships: () => dispatch(fetchMemberships()),
    receiveChannel: (channel) => dispatch(receiveChannel(channel))

});

export default connect(msp, mdp)(DmsIndex)









