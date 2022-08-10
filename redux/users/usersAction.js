import axios from 'axios';
import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from './usersTypes';

export const fetchUsers = () => {
  return async (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_ERROR, payload: error });
      });
  };
};
