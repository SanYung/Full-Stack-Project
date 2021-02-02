import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import channelReducer from "./channel_reducer";
import allchannelsReducer from "./allchannels_reducer"
import postReducer from "./post_reducer";
import membershipReducer from "./membership_reducer"
import dmsReducer from "./dms_reducer"

const entitiesReducer = combineReducers({
    users: userReducer,
    allchannels: allchannelsReducer,
    channels: channelReducer,
    posts: postReducer,
    memberships: membershipReducer,
    dms: dmsReducer
});

export default entitiesReducer;