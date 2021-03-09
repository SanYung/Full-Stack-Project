import { RECEIVE_CURRENT_USERS, RECEIVE_CURRENT_USER, UPDATE_CURRENT_USER, RECEIVE_UPDATED_USER} from '../actions/session_action';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USERS:
            return Object.assign({}, oldState, action.users)
        case RECEIVE_CURRENT_USER:
            newState = { [action.user.id]: action.user };
            return newState
        case RECEIVE_UPDATED_USER:
            return Object.assign({}, { user: { ...oldState.user, ...action.user } })
        case UPDATE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState;

        default:
            return oldState;
    }
};

export default usersReducer;
