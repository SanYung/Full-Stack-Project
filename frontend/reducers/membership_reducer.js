import {
    REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIPS, RECEIVE_MEMBERSHIP, OPEN_MEMBERS_LIST, 
} from '../actions/membership_action';

import {
    LOGOUT_CURRENT_USER
} from '../actions/session_action';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEMBERSHIPS:
            return Object.assign({}, action.memberships);
        // case RECEIVE_MEMBERSHIP:
        //     return Object.assign({}, state, { [action.membership.id]: action.membership })
        // case REMOVE_MEMBERSHIP:
        //     let nextState = Object.assign({}, state);
        //     delete nextState[action.membership.id];
        //     return nextState;
        case LOGOUT_CURRENT_USER: 
            return {};
        default:
            return state;
    }
};
