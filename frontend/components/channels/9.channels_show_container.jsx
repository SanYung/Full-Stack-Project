import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel, deleteChannel } from '../../actions/channel_action';
import ChannelShow from './8.channels_show';
import { openModal } from '../../actions/modal_actions'
import { deleteMembership } from '../../actions/membership_action';



const msp = (state, ownProps) => {
    return({
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
    currentUser : state.session.currentUser
})}


const mdp = (dispatch) => ({
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    deleteMembership: ((channelId, memberId) => dispatch(deleteMembership(channelId, memberId))),
    deleteChannel: ((channelId) => dispatch(deleteChannel(channelId))),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(ChannelShow)