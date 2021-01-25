import {
    RECEIVE_CHANNEL_ERRORS, 
    RECEIVE_CHANNEL,
    CLEAR_CHANNEL_ERRORS
} from '../actions/channel_action'

const channelErrorsReducer = (oldState = [], action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign([], oldState)
    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors
        case RECEIVE_CHANNEL:
            return [];
        case CLEAR_CHANNEL_ERRORS:
            return [];
        default:
            return oldState;
    }
}

export default channelErrorsReducer