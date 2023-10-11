import { combineReducers } from "@reduxjs/toolkit";
import applicationReducer from "./application/application.reducer";

const reducer = combineReducers({
  task: applicationReducer,
});

export default reducer;
