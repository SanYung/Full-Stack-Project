import { RECEIVE_POST, RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS } from '../actions/post_action'


const postsErrorsReducer = (oldState = [], action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign([], oldState)
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors
        case RECEIVE_POST:
            return [];
        case CLEAR_POST_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default postsErrorsReducer