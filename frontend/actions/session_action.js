import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'


//action creators 
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: RECEIVE_CURRENT_USER
});

//thunk action creators

export const createUser = (user) => (dispatch) => (
    APIUtil.createUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
);


export const createSession = (user) => (dispatch) => (
    APIUtil.createSession(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
)

export const deleteSession = () => (dispatch) => (
    APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
)