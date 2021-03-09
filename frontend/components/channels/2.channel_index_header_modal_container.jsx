import React from 'react';
import { connect } from 'react-redux';
import ChannelIndexHeaderModal from './2.channel_index_header_modal'
import { deleteSession } from '../../actions/session_action'
import { closeModal, openModal } from '../../actions/modal_actions'
import { updateCurrentUser } from "../../actions/session_action"

const msp = (state) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser.id],
    }
}

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession())),
    closeModal: (modal) => dispatch(closeModal(modal)),
    openModal: (modal) => dispatch(openModal(modal)),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),

});

export default connect(msp, mdp)(ChannelIndexHeaderModal)