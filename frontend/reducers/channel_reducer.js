import {
    RECEIVE_ALL_CHANNELS,
    RECEIVE_CHANNEL,
    REMOVE_CHANNEL,
} from '../actions/channel_action';


const ChannelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            return Object.assign(nextState, oldState, { [action.channel.id]: action.channel })
        case REMOVE_CHANNEL:
            delete nextState[action.channelId]
            return nextState
        default:
            return oldState
    }
}

export default ChannelsReducer