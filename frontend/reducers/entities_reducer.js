import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import channelReducer from "./channel_reducer";
import postReducer from "./post_reducer"

const entitiesReducer = combineReducers({
    users: userReducer,
    channels: channelReducer,
    posts: postReducer
});

export default entitiesReducer;