//index
export const fetchChannels = (memberId) => {
    return $.ajax({
        url: `/api/users/${memberId}/channels`
     })}
    
export const fetchAllChannels = () => {
    return $.ajax({
        url: "/api/channels",
    })
}

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
        data: { channel }

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

export const fetchMemberships = (channelId) => {
    return $.ajax({
        url: `/api/channels/${channelId}/users`,
        method: "GET",
    })
}
