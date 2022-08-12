import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_SECOND_URL,
} from "./usersTypes";
const initialState = {
  users: [],
  error: "",
  secondUrlData: [],
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
    case FETCH_SECOND_URL:
      return {
        secondUrlData: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
export default usersReducer;
