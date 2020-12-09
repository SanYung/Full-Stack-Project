import React from 'react';
import {connect} from 'react-redux';
import Navbar from './nav_bar';
import { deleteSession } from '../../actions/session_action';

const msp = (state) => ({
    user: state.session.user
});

const mdp = (dispatch) => ({
    deleteSession: (() => dispatch(deleteSession()))
})


export default connect(msp, mdp)(Navbar)