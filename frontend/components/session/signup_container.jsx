import {connect} from 'react-redux';
import {createUser, createSession} from '../../actions/session_action';
import Signup from './signup';

const msp = (state) => ({
    user: { 
        username:'',
        email: '',
        password: '',
        },
    demo: {
        username: 'demo',
        email: 'demo@aa.com',
        password: 'demo123',
    }
})

const mdp = (dispatch) => ({
    createUser: ((user) => dispatch(createUser(user))),
    createSession: ((user) => dispatch(createSession(user)))
});

export default connect (msp, mdp)(Signup)