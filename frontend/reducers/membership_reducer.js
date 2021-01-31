import {
    REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIPS, 
} from '../actions/membership_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEMBERSHIPS:
            return Object.assign({}, action.memberships);
        case REMOVE_MEMBERSHIP:
            let nextState = Object.assign({}, state);
            delete nextState[action.membership.id];
            return nextState;
        default:
            return state;
    }
};