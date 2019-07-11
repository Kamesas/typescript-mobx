export interface IStateUser {
  name: string;
  work: string;
  [key: string]: any;
}

export interface IState {
  users: IStateUser[];
}

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";

export interface iUsersAction {
  type: string;
  payload: IState;
}

export type UsersActions = iUsersAction;
