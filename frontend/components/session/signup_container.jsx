import {connect} from 'react-redux';
import {createUser} from '../../actions/session_action';
import Signup from './signup';

const mdp = (dispatch) => ({
    createUser: ((user) => dispatch(createUser(user)))
});

export default connect (null, mdp)(Signup)