import { OPEN_MEMBERS_LIST } from '../actions/membership_action';
import { LOGOUT_CURRENT_USER } from '../actions/session_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MEMBERS_LIST:
            return { ['className'] : 'action.list' }
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};
