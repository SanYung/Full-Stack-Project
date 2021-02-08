import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChannel, deleteChannel, fetchChannels, updateChannel } from '../../actions/channel_action';
import GearModal from './5.gear_modal';
import { openModal } from '../../actions/modal_actions'
import { deleteMembership, fetchMemberships } from '../../actions/membership_action';
import { channelMembersCount, dmsTitlex } from '../../reducers/channel_selector'

const msp = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        memberships: state.entities.memberships,
        count: channelMembersCount(state, ownProps),
        dmsTitlex: dmsTitlex(state, ownProps),
        currentChannel: state.entities.allchannels[ownProps.match.params.channelId],


    })
}

const mdp = (dispatch) => ({
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    deleteMembership: ((channelId, memberId) => dispatch(deleteMembership(channelId, memberId))),
    deleteChannel: ((channelId) => dispatch(deleteChannel(channelId))),
    openModal: modal => dispatch(openModal(modal)),
    fetchMemberships: () => dispatch(fetchMemberships()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    updateChannel: ((channel) => dispatch(updateChannel(channel)))


})

export default withRouter(connect(msp, mdp)(GearModal))