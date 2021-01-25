import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import channelReducer from "./channel_reducer";
import postReducer from "./post_reducer";
import dmsReducer from './dms_reducer';
import membershipReducer from './membership_reducer'

const entitiesReducer = combineReducers({
    users: userReducer,
    channels: channelReducer,
    posts: postReducer,
    dms: dmsReducer,
    memberships: membershipReducer,
});

export default entitiesReducer;