import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import channelErrorsReducer from './channels_errors_reducer';
import postsErrorsReducer from './post_errors_reducer';


const errorReducer = combineReducers({
    session: sessionErrorsReducer,
    channel: channelErrorsReducer,
    post: postsErrorsReducer
});


export default errorReducer