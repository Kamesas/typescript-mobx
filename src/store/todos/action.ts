import { TodoActions, iTodo, ADD_TODO } from "./types";

export const addTodo = (todo: iTodo): TodoActions => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const saveToLocalStorage = (todo: iTodo) => {
  return (dispatch: any) => {
    dispatch(addTodo(todo));
  };
};
