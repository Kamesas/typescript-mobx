import { iUsers, UsersActions, GET_USERS, DELETE_USER } from "./types";

const initialState: iUsers = {
  users: []
};

export function users(state = initialState, action: UsersActions): iUsers {
  switch (action.type) {
    case GET_USERS:
      return { users: [...state.users, action.payload] };
    case DELETE_USER:
      console.log("delete");
      return state;
    default:
      return state;
  }
}
