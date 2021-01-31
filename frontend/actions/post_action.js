import * as PostAPIUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS'
export const CLEAR_TEXT_BOX = "CLEAR_TEXT_BOX"



// action creators 
const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})


export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS
})

export const clearTextBox = () => ({
    type: CLEAR_TEXT_BOX
})


//thunk action creators

export const fetchPosts = (channelId) => (dispatch) => (
    PostAPIUtil.fetchPosts(channelId)
        .then((post) => dispatch(receivePosts(post)))
)

export const fetchPost = (postId) => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then((post) => dispatch(receivePost(post)))
)

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post)
        .then((post) => (dispatch(receivePost(post))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        )))