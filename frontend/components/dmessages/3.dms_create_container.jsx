import React from 'react';
import { connect } from 'react-redux';
import DmsCreate from './3.dms_create';
import { withRouter } from 'react-router-dom'
import { fetchUsers } from '../../actions/session_action'
import { closeModal } from '../../actions/modal_actions'
import { createChannel, fetchAllChannels, fetchChannels } from '../../actions/channel_action'
import { createMembership } from '../../actions/membership_action'
import { alreadyExistingDmessages, allDms, lastItemChannelId} from '../../reducers/channel_selector'


const msp = (state, ownProps) => {

    return ({
    users: state.entities.users,
    alreadyExistingDmessages: alreadyExistingDmessages(state),
    currentUser: state.session.currentUser,
    channelId: ownProps.match.params.channelId,
    channels : state.entities.channels,
    allDms: allDms(state),
    lastItemChannelId: lastItemChannelId(state)

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