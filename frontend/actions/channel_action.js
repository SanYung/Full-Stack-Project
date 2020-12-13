import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'


//action creators 
const receiveAllChannels = (channels) => ({
    type: RECEIVE_ALL_CHANNELS,
    channels
});

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
})

//thunk action creators

export const fetchChannels = (userId) => (dispatch) => (
    ChannelAPIUtil.fetchChannels(userId)
        .then((channels) => dispatch(receiveAllChannels(channels)))
)

export const fetchChannel = (channelId) => dispatch => (
    ChannelAPIUtil.fetchChannel(channelId)
        .then((channel) => dispatch(receiveChannel(channel)))
)

export const createChannel = (channel) => dispatch => (
    ChannelAPIUtil.createChannel(channel)
        .then((channel) => dispatch(receiveChannel(channel)))
)

export const updateChannel = (channel) => dispatch => (
    ChannelAPIUtil.updateChannel(channel)
        .then((channel) => dispatch(receiveChannel(channel)))
)

export const deleteChannel = (channelId) => dispatch => (
    ChannelAPIUtil.deleteChannel(channelId)
        .then(() => dispatch(removeChannel(channelId)))
)