import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteChannel, fetchChannels} from '../../actions/channel_action';
import GearModal from './5.gear_modal';
import { closeModal, openModal} from '../../actions/modal_actions'
import { deleteMembership, fetchMemberships } from '../../actions/membership_action';




const msp = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        memberships: state.entities.memberships,
        channelId: ownProps.match.params.channelId,
        channel: state.entities.allchannels[ownProps.match.params.channelId],
    })
}

const mdp = (dispatch) => ({
    deleteMembership: ((channelId, memberId) => dispatch(deleteMembership(channelId, memberId))),
    deleteChannel: ((channelId) => dispatch(deleteChannel(channelId))),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal)),
    fetchMemberships: () => dispatch(fetchMemberships()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),



})

export default withRouter(connect(msp, mdp)(GearModal))