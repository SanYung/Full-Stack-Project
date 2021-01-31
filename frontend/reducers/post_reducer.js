import { RECEIVE_POSTS , RECEIVE_POST, CLEAR_TEXT_BOX} from '../actions/post_action';

const PostReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign(nextState, { [action.post.id]: action.post })
        case CLEAR_TEXT_BOX:
            return ''
        default:
            return oldState
    }
}

export default PostReducer