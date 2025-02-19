import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";
// import mainReducer from "../reducers";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer
});

const store = configureStore({
  //   reducer: mainReducer
  reducer: rootReducer
});

export default store;
