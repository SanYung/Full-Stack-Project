import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_action'
import DmsIndex from './1.dms_index'
import { openModal } from '../../actions/modal_actions'


const msp = (state) => {
    return {
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser.id],
    }
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(DmsIndex)