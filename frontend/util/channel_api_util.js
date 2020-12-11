
//index
export const fetchChannels = (userId) => (
    $.ajax({
        url: `./api/users/${userId}/channels`
    })
)
//show
export const fetchChannel = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}`
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
        url: `/api/posts/${channel.id}`,
        method: 'PATCH',
        data: { channel }
    })
);
//delete

export const deleteChannel = (channelId) => (
    $.ajax({
        url: `/api/posts/${channelId}/`,
        method: 'DELETE'
    })
)