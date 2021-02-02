import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChannel, deleteChannel, fetchChannels } from '../../actions/channel_action';
import ChannelShowHeader from './11.channels_show_header';
import { openModal } from '../../actions/modal_actions'
import { deleteMembership, fetchMemberships } from '../../actions/membership_action';
import { channelMembersCount } from '../../reducers/channel_selector'

const msp = (state, ownProps) => {
    return ({
    currentUser: state.session.currentUser,
    memberships: state.entities.memberships,
    count: channelMembersCount(state, ownProps)

    })}

const mdp = (dispatch) => ({
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    deleteMembership: ((channelId, memberId) => dispatch(deleteMembership(channelId, memberId))),
    deleteChannel: ((channelId) => dispatch(deleteChannel(channelId))),
    openModal: modal => dispatch(openModal(modal)),
    fetchMemberships: () => dispatch(fetchMemberships()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),

})

export default withRouter(connect(msp, mdp)(ChannelShowHeader))