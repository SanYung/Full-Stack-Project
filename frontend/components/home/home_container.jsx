import { connect } from 'react-redux';
import {createSession} from '../../actions/session_action';
import Home from './home';


const mdp = (dispatch) => {
    return{
    createSession: ((user) => dispatch(createSession(user)))
    }
};

export default connect(null, mdp)(Home)