import { IState, UsersActions, GET_USERS, DELETE_USER } from "./types";

const initialState: IState = {
  users: []
};

export function users(state = initialState, action: UsersActions): IState {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case DELETE_USER:
      return state;
    default:
      return state;
  }
}
