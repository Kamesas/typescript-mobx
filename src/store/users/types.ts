export interface IStateUser {
  name: string;
  work: string;
  [key: string]: any;
}

export interface IStateUsers {
  users: IStateUser;
}

export interface iUser {
  id?: number | string;
  name?: string;
  username?: string;
  email?: string;
  [key: string]: any;
}

export interface iUsers {
  users: iUser[];
}

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";

export interface iUsersAction {
  type: string;
  payload: {};
}

export type UsersActions = iUsersAction;
