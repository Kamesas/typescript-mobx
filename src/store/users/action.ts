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
    payload: { id: 6565656, name: "Alex" }
  };
};

export type UsersActions = iUsersAction;
