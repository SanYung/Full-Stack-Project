import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUsers } from '../../actions/session_action'
import { fetchChannels, fetchAllChannels, receiveChannel } from '../../actions/channel_action'
import DmsIndexItem from './2.dms_index_item'
import { openModal } from '../../actions/modal_actions'
import { fetchMemberships } from '../../actions/membership_action'
import { dmsTitle } from '../../reducers/channel_selector'

const msp = (state, ownProps) => {

    return {
        currentUser : state.session.currentUser,
        dmsTitle: dmsTitle(state, ownProps)
    }
}

const mdp = (dispatch) => ({
    receiveChannel: (channel) => dispatch(receiveChannel(channel)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: modal => dispatch(openModal(modal)),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchMemberships: () => dispatch(fetchMemberships())

});

export default withRouter(connect(msp, mdp)(DmsIndexItem))









