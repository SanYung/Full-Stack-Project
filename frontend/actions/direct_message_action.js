import * as DirectMessageUtil from '../util/direct_message_api_util';
export const RECEIVE_DIRECTMESSAGES = 'RECEIVE_DIRECTMESSAGES';
export const RECEIVE_DIRECTMESSAGE = 'RECEIVE_DIRECTMESSAGE';

const receiveDirectMessages = (messages) => {
    return {
        type: RECEIVE_DIRECTMESSAGES,
        messages
    }
}

const receiveDirectMessage = (message) => {
    return {
        type: RECEIVE_DIRECTMESSAGE,
        message
    }
}

export const createDms = (message) => dispatch => (
    DirectMessageUtil.createDms(message).then(message => (
        dispatch(receiveDirectMessage(message)))
    )
);


export const fetchDms = (current_user_id, receiver_id) => dispatch => (
    DirectMessageUtil.fetchDms(current_user_id, receiver_id)
        .then((messages) => dispatch(receiveDirectMessages(messages)))
);