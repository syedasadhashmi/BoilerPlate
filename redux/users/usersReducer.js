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
        ...state,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    case FETCH_SECOND_URL:
      // const temp = state.secondUrlData.push(action.payload);
      return {
        ...state,
        secondUrlData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default usersReducer;
