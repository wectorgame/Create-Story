import { combineReducers } from "redux";
import authReducer from "./auth";
import createReducer from "./create";
/* import storyReducer from "./story"; */

export default combineReducers({
  create: createReducer,
  auth: authReducer,
  /* story: storyReducer, */
});
