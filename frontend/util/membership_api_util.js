export const fetchAllMemberships = () => {
    return $.ajax({
        url: `/api/memberships`
    })
}

export const fetchMemberships = (channelId) => {
    return $.ajax({
        url: `/api/memberships`,
        data: { channelId: channelId }
    })
}

export const createMembership = (channelId, memberId) => {
    return $.ajax({
        url: `/api/memberships`,
        method: "POST",
        data: {
            membership: {
                member_id: memberId,
                channel_id: channelId
            }
        }
    })
}

export const deleteMembership = (channelId, memberId) => {
    return $.ajax({
        url: `/api/memberships/${memberId}`,
        method: "DELETE",
        data: {
            membership: {
                member_id: memberId,
                channel_id: channelId
            }
        }
    })
}
