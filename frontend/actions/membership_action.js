import * as MembershipApiUtil from '../util/membership_api_utils';

export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS';


const receiveMemberships = (memberships) => ({
    type: RECEIVE_MEMBERSHIPS,
    memberships
});

export const fetchMemberships = (channelId) => dispatch => {
    return MembershipApiUtil.fetchMemberships(channelId)
        .then(channelId => dispatch(receiveMemberships(channelId)))
}

export const createMembership = (channelId, memberId) => dispatch => {
    return MembershipApiUtil.createMembership(channelId, memberId)
        .then(memberId => dispatch(receiveMemberships(memberId)))
}


export const deleteMembership = (channelId, memberId) => dispatch => {
    return MembershipApiUtil.deleteMembership(channelId, memberId)
        .then(memberId => dispatch(receiveMemberships(memberId)))
}
