import { combineReducers } from "redux";
import cds from "./cd/reducer";
import user from "./user/reducer";
import cdSearch from "./cdSearch/reducer";

export default combineReducers({
  cds,
  user,
  cdSearch,
});
