import {
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER,
    RECEIVE_UPDATED_USER
} from '../actions/session_action';


const _nullSession = {
    currentUser: null,
};

const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState)
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user  })
        case RECEIVE_UPDATED_USER:
            return Object.assign({}, { currentUser: { ...oldState.user, ...action.user } })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return oldState
    }
}

export default sessionReducer