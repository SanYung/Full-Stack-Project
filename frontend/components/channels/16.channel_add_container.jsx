import React from 'react';
import { connect } from 'react-redux';
import ChannelAdd from './16.channel_add'
import { fetchChannels } from '../../actions/channel_action'
import { openModal, closeModal } from '../../actions/modal_actions'


const msp = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        channels: state.entities.channels
    })
}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    fetchChannels: (userId) => dispatch(fetchChannels(userId))

})

export default connect(msp, mdp)(ChannelAdd)