import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

let store = configureStore();

export default store;
