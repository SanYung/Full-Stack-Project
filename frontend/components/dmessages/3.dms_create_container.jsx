import React from 'react';
import { connect } from 'react-redux';
import DmsCreate from './3.dms_create';
import { withRouter } from 'react-router-dom'
import { fetchUsers } from '../../actions/session_action'
import { closeModal } from '../../actions/modal_actions'
import { createChannel, fetchAllChannels, fetchChannels } from '../../actions/channel_action'
import { createMembership } from '../../actions/membership_action'
import {lastItemChannelId, channelMembers} from '../../reducers/channel_selector'


const msp = (state, ownProps) => {
    return ({
    users: state.entities.users,
    currentUser: state.session.currentUser,
    channelId: ownProps.match.params.channelId,
    channels : state.entities.channels,
    allchannels: state.entities.allchannels,
    lastItemChannelId: lastItemChannelId(state),
    memberships: channelMembers(state),
    membersps: state.entities.memberships

})}

const mdp = (dispatch) => ({
    createChannel: ((channel) => dispatch(createChannel(channel))), 
    createMembership: ((channelId, memberId) => dispatch(createMembership(channelId, memberId))),
    fetchUsers: (() => dispatch(fetchUsers())),
    closeModal: () => dispatch(closeModal()),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId))
})

export default withRouter(connect(msp, mdp)(DmsCreate))