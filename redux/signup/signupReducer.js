import { CallToActionRounded } from "@mui/icons-material";
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
      localStorage.setItem("name", action.payload);
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
      debugger;
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
