import * as PostAPIUtil from '../util/post_api_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS'
export const CLEAR_TEXT_BOX = "CLEAR_TEXT_BOX"



// action creators 
const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
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
        .then((post) => dispatch(receiveAllPosts(post)))
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