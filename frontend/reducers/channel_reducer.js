import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_action';

import { LOGOUT_CURRENT_USER } from '../actions/session_action';


const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel })
        case REMOVE_CHANNEL:
            let nextState = Object.assign({}, state);
            delete nextState[action.channelId]
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default channelsReducer;