import * as MembershipApiUtil from '../util/membership_api_util';

export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS';
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const OPEN_MEMBERS_LIST = 'OPEN_MEMBERS_LIST';

// const receiveMembership = (membership) => ({
//     type: RECEIVE_MEMBERSHIP,
//     membership
// });
const receiveMemberships = (memberships) => ({
    type: RECEIVE_MEMBERSHIPS,
    memberships
});

export const openMembersList = () => ({
    type: CLOSE_MEMBERS_LIST,
    list
})

export const fetchAllMemberships = () => dispatch => {
    return MembershipApiUtil.fetchAllMemberships()
        .then(memberships => dispatch(receiveMemberships(memberships)))
}

export const fetchMemberships = (channelId, memberId) => dispatch => {
    return MembershipApiUtil.fetchMemberships(channelId, memberId)
        .then(channelId => dispatch(receiveMemberships(channelId)))
}

export const createMembership = (channelId, memberId ) => dispatch => {
    return MembershipApiUtil.createMembership(channelId, memberId )
        .then(memberId => dispatch(receiveMemberships(memberId)))
}


export const deleteMembership = (channelId, memberId) => dispatch => {
    return MembershipApiUtil.deleteMembership(channelId, memberId)
        .then(memberId => dispatch(receiveMemberships(memberId)))
}
