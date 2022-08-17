import { CallToActionRounded } from "@mui/icons-material";
import {
  FETCH_EMAIL,
  FETCH_NAME,
  FETCH_DOB,
  FETCH_PASSWORD,
  FETCH_JOB_ROLE,
} from "./signupTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  dob: "",
  jobRole: "",
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
      localStorage.setItem("email", action.payload);
      return {
        ...state,
        email: action.payload,
      };
    case FETCH_PASSWORD:
      localStorage.setItem("password", action.payload);
      return {
        ...state,
        password: action.payload,
      };
    case FETCH_DOB:
      localStorage.setItem("DOB", action.payload);
      return {
        ...state,
        dob: action.payload,
      };
    case FETCH_JOB_ROLE:
      localStorage.setItem("jobRole", action.payload);
      return {
        ...state,
        jobRole: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signupReducer;
