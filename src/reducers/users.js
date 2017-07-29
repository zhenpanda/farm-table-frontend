import {FETCH_USERS} from '../actions/types';

// take current list of user concated other users
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
  }
  return state;
}
