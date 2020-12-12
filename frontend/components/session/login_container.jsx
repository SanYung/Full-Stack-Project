import { connect } from 'react-redux';
import React from 'react';
import Login from './login';
import { createSession, clearErrors } from '../../actions/session_action';


const msp = ( {errors}) => ({
    user: {
        username: '',
        email: '',
        password: '',
    },
    errors: errors.session
})
const mdp = (dispatch) => ({
    createSession: ((user) => dispatch(createSession(user))),
    clearErrors: (() => dispatch(clearErrors()))
});


export default connect(msp, mdp)(Login)