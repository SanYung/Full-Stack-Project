export const fetchMemberships = (channelId) => (
    $.ajax({
        url: `/api/memberships`,
        data: {channelId:channelId}
    })
)

export const createMembership = (channelId, memberId) => (
    $.ajax({
        url: `/api/memberships`,
        method: 'POST',
        data: {membership: {
            member_id: memberId,
            channel_id: channelId
        }}
    })
)

export const deleteMembership = (channelId, memberId) => (
    $.ajax({
        url: `/api/memberships/${memberId}`,
        method: 'DELETE',
        data: {membership: {
            member_id: memberId,
            channel_id: channelId
        }}
    })
)