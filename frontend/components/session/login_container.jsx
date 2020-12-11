import { connect } from 'react-redux';
import React from 'react';
import Login from './login';
import { createSession } from '../../actions/session_action';


const msp = ( {errors}) => ({
    user: {
        username: '',
        email: '',
        password: '',
    },
    errors: errors.session
})
const mdp = (dispatch) => ({
    createSession: ((user) => dispatch(createSession(user)))
});


export default connect(msp, mdp)(Login)