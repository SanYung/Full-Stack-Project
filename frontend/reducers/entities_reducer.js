import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import channelReducer from "./channel_reducer"

const entitiesReducer = combineReducers({
    users: userReducer,
    channels: channelReducer
});

export default entitiesReducer;