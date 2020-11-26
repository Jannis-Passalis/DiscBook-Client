import { combineReducers } from "redux";
import cds from "./cd/reducer";
import user from "./user/reducer";

export default combineReducers({
  cds,
  user,
});
