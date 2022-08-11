import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/usersReducer";
import signupReducer from "./signup/signupReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const root = combineReducers({
  usersReducer: usersReducer,
  signupReducer: signupReducer,
});
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;
