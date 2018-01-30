import { combineReducers } from 'redux';
import UsersReducers from './UsersReducer';

export default combineReducers({
	userInfo: UsersReducers
});
