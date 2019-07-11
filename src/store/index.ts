import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { users } from "./users/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  users,
  todos: todosReducer
});

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
  return store;
};
