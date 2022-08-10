import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from './usersTypes';
const initialState = {
  users: [],
  error: '',
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        users: [],
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
export default usersReducer;
