import {
  FETCH_EMAIL,
  FETCH_NAME,
  FETCH_DOB,
  FETCH_PASSWORD,
  FETCH_JOB_ROLE,
} from "./signupTypes";

export const fetchName = (name) => {
  return {
    type: FETCH_NAME,
    payload: name,
  };
};
export const fetchEmail = (email) => {
  return {
    type: FETCH_EMAIL,
    payload: email,
  };
};
export const fetchPassword = (password) => {
  return {
    type: FETCH_PASSWORD,
    payload: password,
  };
};
export const fetchDOB = (DOB) => {
  debugger;
  return {
    type: FETCH_DOB,
    payload: DOB,
  };
};
export const fetchJobRole = (jobRole) => {
  return {
    type: FETCH_JOB_ROLE,
    payload: jobRole,
  };
};
