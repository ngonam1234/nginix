import counterReducer from './counterReducer';
import loggedReducer from './isLoggedIn';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import orderReducer from './orderReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  auth: authReducer,
  message: messageReducer,
  order: orderReducer
});

export default allReducers;