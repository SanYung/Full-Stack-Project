import { combineReducers } from 'redux';
import modal from './modal_reducer';
import detail from './detail_reducer'

export default combineReducers({
    modal,
    detail

});
