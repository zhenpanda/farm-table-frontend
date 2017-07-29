import axios from 'axios';
import {CHANGE_AUTH, FETCH_USERS} from './types';

const URL = 'https://jsonplaceholder.typicode.com/users';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

// thunk
export function fetchUsers() {
  return function(dispatch) {
    console.log("sending test calls...");
    axios.get(`${URL}`)
    .then(response => {
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      });
    })
    .catch(response => {
      console.log("there is an issue....");
      debugger;
    });
  }
}
