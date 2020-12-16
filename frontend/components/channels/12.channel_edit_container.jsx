import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { updateChannel, fetchChannel } from '../../actions/channel_action';
import ChannelEditDes from './13.channel_edit_description'
import { openModal, closeModal } from '../../actions/modal_actions'


const msp = (state, ownProps) => {
        return({
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelerrors: state.errors.channel,
    formType: 'editdescription'
})}

const mdp = (dispatch) => ({
    updateChannel: ((channel) => dispatch(updateChannel(channel))),
    fetchChannel: ((channelId) => dispatch(fetchChannel(channelId))),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(ChannelEditDes))