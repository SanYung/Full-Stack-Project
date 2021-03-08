import React from 'react';
import { connect } from 'react-redux';
import  AddPhoto from './11.add_photo'
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/session_action"

const msp = (state, ownProps) => {
    return ({
        currentUser: state.session.currentUser,
        
    })
}

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),

})

export default connect(msp, mdp)(AddPhoto)