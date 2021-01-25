import { RECEIVE_MEMBERSHIPS } from '../actions/membership_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEMBERSHIPS:
            return Object.assign({}, action.memberships);
        default:
            return state;
    }
};