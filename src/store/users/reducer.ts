import { UsersActions, GET_USERS, DELETE_USER } from "./types";

const initialState: object = {};

export function users(state = initialState, action: UsersActions): {} {
  switch (action.type) {
    case GET_USERS:
      console.log(state, action.payload);
      return action.payload;
    case DELETE_USER:
      console.log("delete");
      return state;
    default:
      return state;
  }
}
