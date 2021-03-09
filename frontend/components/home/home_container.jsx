import { connect } from 'react-redux';
import { createSession, updateCurrentUser, receiveUpdatedUser, fetchUsers} from '../../actions/session_action';
import Home from './home';


const mdp = (dispatch) => {
    return{
    createSession: ((user) => dispatch(createSession(user))),
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
    receiveUpdatedUser: (user) => dispatch(receiveUpdatedUser(user)),
    fetchUsers: (user) => dispatch(fetchUsers(user))
    }
};



export default connect(null, mdp)(Home)