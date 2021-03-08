import {connect} from 'react-redux';
import React from 'react';
import {createUser, createSession, clearErrors} from '../../actions/session_action';
import Signup from './signup';

const msp = ({errors}) => ({
    user: { 
        username:'',
        email: '',
        password: '',
        photo: window.profileURL2
        },
    demo: {
        username: 'DemoUser',
        email: 'demo@aa.com',
        password: 'demo123',
    },
    errors: errors.session
})

const mdp = (dispatch) => ({
    createUser: ((user) => dispatch(createUser(user))),
    createSession: ((user) => dispatch(createSession(user))),
    clearErrors: (() => dispatch(clearErrors()))
});

export default connect (msp, mdp)(Signup)