import { iTodos, TodoActions, ADD_TODO } from "./types";

const initialState: iTodos = {
  todos: []
};

export const todosReducer = (
  state = initialState,
  action: TodoActions
): iTodos => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};
