import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.user.id]: action.user });
        default:
            return oldState;
    }
};

export default usersReducer;
