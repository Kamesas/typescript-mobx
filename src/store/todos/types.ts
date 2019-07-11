export interface iTodo {
  id: number | string;
  title: string;
  completed: false;
}

export interface iTodos {
  todos: iTodo[];
}

export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";

export interface iAddTodo {
  type: typeof ADD_TODO;
  payload: iTodo;
}

export type TodoActions = iAddTodo;
