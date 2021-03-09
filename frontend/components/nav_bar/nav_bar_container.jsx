import React from 'react';
import {connect} from 'react-redux';
import Navbar from './nav_bar';
import { deleteSession } from '../../actions/session_action';
import { updateCurrentUser } from "../../actions/session_action"

const msp = (state) => ({
    currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession())),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
})


export default connect(msp, mdp)(Navbar)