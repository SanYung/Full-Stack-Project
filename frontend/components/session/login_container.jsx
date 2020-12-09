import { connect } from 'react-redux';
import Login from './login';
import { createSession } from '../../actions/session_action';


const mdp = (dispatch) => ({
    createSession: ((user) => dispatch(createSession(user)))
});


export default connect(null, mdp)(Login)