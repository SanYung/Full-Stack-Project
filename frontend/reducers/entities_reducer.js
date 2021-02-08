import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import channelReducer from "./channel_reducer";
import allchannelsReducer from "./allchannels_reducer"
import postReducer from "./post_reducer";
import membershipReducer from "./membership_reducer"
import membersList from "./members_list"


const entitiesReducer = combineReducers({
    users: userReducer,
    allchannels: allchannelsReducer,
    channels: channelReducer,
    posts: postReducer,
    memberships: membershipReducer,
    list: membersList
});

export default entitiesReducer;