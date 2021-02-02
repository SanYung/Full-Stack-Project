import { RECEIVE_POSTS , RECEIVE_POST, CLEAR_TEXT_BOX} from '../actions/post_action';
import { LOGOUT_CURRENT_USER } from '../actions/session_action';

const PostReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign(nextState, { [action.post.id]: action.post })
        case CLEAR_TEXT_BOX:
            return ''
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state
    }
}

export default PostReducer