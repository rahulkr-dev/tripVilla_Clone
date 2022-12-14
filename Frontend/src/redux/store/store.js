import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../authentication/auth.reducer";
import { searchReducer } from './../landingPage/search.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  search:searchReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
