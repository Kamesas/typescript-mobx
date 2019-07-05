import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { users } from "./users/reducer";

const rootReducer = combineReducers({
  users
});

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
  return store;
};

// const middlewares = [thunk];

// createStore(rootReducer, initialState, applyMiddleware(...middlewares));
