interface iUsers {
  id: number | string;
  name: string;
  username?: string;
  email?: string;
  [key: string]: any;
}

export interface iUsersAction {
  type: string;
  payload: iUsers;
}

export const getUsers = (): iUsersAction => {
  return {
    type: "GET_USERS",
    payload: { id: new Date().getTime(), name: "Alex" }
  };
};

export type UsersActions = iUsersAction;
