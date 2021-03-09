import { connect } from 'react-redux';
import React from 'react';
import Login from './login';
import { createSession, clearErrors, updateCurrentUser, fetchUsers} from '../../actions/session_action';
import { RiRepeatOneLine } from 'react-icons/ri';


const msp = ({errors}) => {

    return ({
    user: {
        username: '',
        email: '',
        password: '',
        online: true
    },
    demo: {
        username: 'DemoUser',
        email: 'demo@aa.com',
        password: 'demo123',
        online: true
    },
    errors: errors.session,
})}
const mdp = (dispatch) => ({
    createSession: ((user) => dispatch(createSession(user))),
    clearErrors: (() => dispatch(clearErrors())),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
    fetchUsers: () => dispatch(fetchUsers)
});


export default connect(msp, mdp)(Login)