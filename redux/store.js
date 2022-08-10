import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './users/usersReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = combineReducers({
  usersReducer: usersReducer,
});
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;
