import {connect} from 'react-redux';
import React from 'react';
import {createUser, createSession} from '../../actions/session_action';
import Signup from './signup';

const msp = ({errors}) => ({
    user: { 
        username:'',
        email: '',
        password: '',
        },
    demo: {
        username: 'demo',
        email: 'demo@aa.com',
        password: 'demo123',
    },
    errors: errors.session
})

const mdp = (dispatch) => ({
    createUser: ((user) => dispatch(createUser(user))),
    createSession: ((user) => dispatch(createSession(user)))
});

export default connect (msp, mdp)(Signup)