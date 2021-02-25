import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import ChannelMembers from './9.channel_members'
import { closeModal } from '../../actions/modal_actions'
import { fetchAllMemberships, createMembership } from '../../actions/membership_action'
import { channelPeopleList, alreadyExistingDmessages, allDms, lastItemChannelId} from '../../reducers/channel_selector'
import { fetchUsers } from '../../actions/session_action'
import { createChannel, fetchAllChannels, fetchChannels } from '../../actions/channel_action'


const msp = (state, ownProps) => {
    return ({
        users: state.entities.users,
        list: channelPeopleList(state, ownProps),
        memberships: state.entities.memberships,
        alreadyExistingDmessages: alreadyExistingDmessages(state),
        allDms: allDms(state),
        users:  state.entities.users,
        currentUser: state.session.currentUser,
        lastItemChannelId: lastItemChannelId(state)
    })
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllMemberships: () => dispatch(fetchAllMemberships()),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createMembership: ((channelId, memberId) => dispatch(createMembership(channelId, memberId))),
    fetchAllMemberships: () => dispatch(fetchAllMemberships()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId))


})

export default withRouter(connect(msp, mdp)(ChannelMembers))