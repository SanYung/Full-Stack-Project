import * as DmsUtil from '../util/dms_api_util';
export const RECEIVE_DMSS = 'RECEIVE_DMSS';
export const RECEIVE_DMS = 'RECEIVE_DMS';

const receiveDmss = (messages) => {
    return {
        type: RECEIVE_DMSS,
        messages
    }
}

const receiveDms = (message) => {
    return {
        type: RECEIVE_DMS,
        message
    }
}

export const createDms = (message) => dispatch => (
    DmsUtil.createDms(message).then(message => (
        dispatch(receiveDms(message)))
    )
);


export const fetchDmss = (currentUserId, receiverId) => dispatch => (
    DmsUtil.fetchDmss(currentUserId, receiverId)
        .then((messages) => dispatch(receiveDmss(messages)))
);