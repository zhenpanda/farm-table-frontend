import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import usersReducer from './users';

// state: (state = {}) => state

//authenticated is a piece of state
const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  users:usersReducer
});

export default rootReducer;
