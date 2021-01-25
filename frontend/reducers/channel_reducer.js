import {
    RECEIVE_ALL_CHANNELS,
    RECEIVE_CHANNEL,
    REMOVE_CHANNEL,
    RECEIVE_CHANNELS,
} from '../actions/channel_action';


const ChannelsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, state, action.channels);
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        case REMOVE_CHANNEL:
            let nextState = Object.assign({}, state);
            delete nextState[action.channelId]
            return nextState
        case RECEIVE_ALL_CHANNELS:
            return Object.assign({}, state, action.allchannels)
        default:
            return state
    }
}

export default ChannelsReducer