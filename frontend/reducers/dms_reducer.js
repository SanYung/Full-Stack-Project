import { RECEIVE_DIRECTMESSAGES, RECEIVE_DIRECTMESSAGE } from '../actions/direct_message_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DIRECTMESSAGES:
            return Object.assign({}, action.messages);
        case RECEIVE_DIRECTMESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message });
        default:
            return state;
    }
};