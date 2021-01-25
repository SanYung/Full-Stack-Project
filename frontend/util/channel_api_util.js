
//index of user's channels
export const fetchUserChannels = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/channels`
    })
)
//show
export const fetchChannel = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}`
    })
)

//index
export const fetchAllChannels = () => (
    $.ajax({
        url: `/api/channels`
    })
)

//fetch channel users
export const fetchChannelUsers = (channelId) => (
    $.ajax({
        url: `api/channels/${channelId}/users`
    })
)

//create
export const createChannel = (channel) => (
    $.ajax({
        url: `/api/channels`,
        method: 'POST',
        data: {channel}
    })
)

//update
export const updateChannel = (channel) => (
    $.ajax({
        url: `/api/channels/${channel.id}`,
        method: 'PATCH',
        data: { channel }
    })
);
//delete

export const deleteChannel = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}/`,
        method: 'DELETE'
    })
)
