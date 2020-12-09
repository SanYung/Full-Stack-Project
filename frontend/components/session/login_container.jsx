import { connect } from 'react-redux';
import Login from './login';
import { createSession } from '../../actions/session_action';


const msp = (state) => ({
    user: {
        username: '',
        email: '',
        password: '',
    },
})
const mdp = (dispatch) => ({
    createSession: ((user) => dispatch(createSession(user)))
});


export default connect(msp, mdp)(Login)