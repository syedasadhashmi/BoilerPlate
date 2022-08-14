import axios from 'axios';
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_SECOND_URL,
} from './usersTypes';
import { apiUrl } from '../../utils/constant';
export const fetchUsers = () => {
  return async (dispatch) => {
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_ERROR, payload: error });
      });
  };
};
export const fetchSecondUrlData = (data) => {
  return {
    type: FETCH_SECOND_URL,
    payload: data,
  };
};
