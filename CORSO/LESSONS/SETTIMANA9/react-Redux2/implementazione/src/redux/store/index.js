import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import cartReducer from "../reducers/cartReducer";
import bookSelectReducer from "../reducers/bookSelectReducer";
import userReducer from "../reducers/userReducer";
import booksReducer from "../reducers/booksReducer";

// non avremo più un singolo reducer fornito allo store, ma combineremo assieme i vari reducer singoli, a comporre un nuovo oggetto globale

const rootReducer = combineReducers({
  cart: cartReducer,
  bookSelected: bookSelectReducer,
  user: userReducer,
  books: booksReducer
});

const store = configureStore({
  // reducer: mainReducer

  // sostituiamo il singolo reducer con quello che li combina insieme
  reducer: rootReducer
});

export default store;
