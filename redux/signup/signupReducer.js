import {
  FETCH_EMAIL,
  FETCH_NAME,
  FETCH_DOB,
  FETCH_PASSWORD,
} from "./signupTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  dob: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case FETCH_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case FETCH_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case FETCH_DOB:
      return {
        ...state,
        dob: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signupReducer;
