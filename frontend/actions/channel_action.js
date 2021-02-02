import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS'
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS'
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'

//action creators 
const receiveAllChannels = (allchannels) => ({
    type: RECEIVE_ALL_CHANNELS,
    allchannels
});

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

const removeChannel = (channeld) => ({
    type: REMOVE_CHANNEL,
    channelId
})

export const receiveChannelErrors = (errors) => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
})

export const clearChannelErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS
})


//thunk action creators
export const fetchAllChannels = () => dispatch => (
    ChannelAPIUtil.fetchAllChannels()
        .then(channels => dispatch(receiveAllChannels(channels)))
);

export const fetchChannels = (userId) => (dispatch) => (
    ChannelAPIUtil.fetchChannels(userId)
        .then((channels) => dispatch(receiveChannels(channels)))
)

export const fetchChannel = (channelId) => dispatch => (
    ChannelAPIUtil.fetchChannel(channelId)
        .then((channel) => dispatch(receiveChannel(channel)))
)

export const createChannel = (channel) => dispatch => (
    ChannelAPIUtil.createChannel(channel)
        .then((channel) => (dispatch(receiveChannel(channel))
        ), err => (
            dispatch(receiveChannelErrors(err.responseJSON))
        )))


export const updateChannel = (channel) => dispatch => (
    ChannelAPIUtil.updateChannel(channel)
        .then((channel) => (dispatch(receiveChannel(channel))
        ), err => (
            dispatch(receiveChannelErrors(err.responseJSON))
        )))


export const deleteChannel = (channelId) => dispatch => {
    return (
        ChannelAPIUtil.deleteChannel(channelId)
            .then((channelId) => dispatch(removeChannel(channelId)))
    )
}