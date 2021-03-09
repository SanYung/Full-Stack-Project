import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_CURRENT_USERS = 'RECEIVE_CURRENT_USERS'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const RECEIVE_USER = "RECEIVE_USER"



//action creators 
const recieveCurrentUsers = (users) => ({
    type: RECEIVE_CURRENT_USERS,
    users
})

export const receiveUpdatedUser = (user) => ({
    type: RECEIVE_UPDATED_USER,
    user
});


const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});


export const updateUser = user => {
    return {
        type: UPDATE_CURRENT_USER,
        user
    }
}

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

//thunk action creators


export const updateCurrentUser = (user) => dispatch => (
    UserAPIUtil.updateUser(user)
        .then((user) => (dispatch(receiveUpdatedUser(user))
        )))


export const fetchUsers = () => (dispatch) => (
    APIUtil.fetchUsers()
        .then((users) => (dispatch(recieveCurrentUsers(users))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchUser = (userID) => (dispatch) => (
    APIUtil.fetchUser(userID)
        .then((user) => (dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createUser = (user) => (dispatch) => (
    APIUtil.createUser(user)
        .then((user) => (dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)


export const createSession = (user) => (dispatch) => (
    APIUtil.createSession(user)
        .then((user) => (dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const deleteSession = () => (dispatch) => (
    APIUtil.deleteSession()
        .then((user) => dispatch(logoutCurrentUser()))
)
