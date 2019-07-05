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

export const getUsersAPI = (users: iUsers): iUsersAction => {
  return {
    type: "GET_USERS_API",
    payload: users
  };
};

//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

export function fetchFunction() {
  return (dispatch: any) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getUsersAPI(res.products));
        return res.products;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const consoleLog = () => {
  return {
    type: "CONSOLE_LOG"
  };
};

export type UsersActions = iUsersAction;
