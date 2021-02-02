import { RECEIVE_DMSS, RECEIVE_DMS } from '../actions/dms_action';
import { LOGOUT_CURRENT_USER } from '../actions/session_action';

const DmsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_DMSS:
            return Object.assign({}, action.messages);
        case RECEIVE_DMS:
            return Object.assign({}, state, { [action.message.id]: action.message });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state
    }
}

export default DmsReducer