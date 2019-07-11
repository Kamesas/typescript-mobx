import { IState, UsersActions, GET_USERS, DELETE_USER } from "./types";

const BASE_URL = "https://react-redux-firebase-1-77d47.firebaseio.com/";
const USERS = "users";

export const getUsersAPI = (users: IState): UsersActions => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export function fetchFunction() {
  return (dispatch: any) => {
    fetch(`${BASE_URL}/${USERS}.json`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        //console.log("fetch", res);
        dispatch(getUsersAPI(res));
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const deleteUser = (id: string | number) => {
  return (dispatch: any) => {
    fetch(`${BASE_URL}/${USERS}/${id}.json`, {
      method: "DELETE"
    })
      .then(e => {
        dispatch({
          type: DELETE_USER
        });

        return e;
      })
      .catch(e => console.log(e));
  };
};

export const addUser = () => {
  return (dispatch: any) => {
    fetch(`${BASE_URL}/${USERS}.json`, {
      method: "POST",
      body: JSON.stringify({ name: "Alex", work: "WevDev" })
    })
      .then(e => {
        console.log(e);
        // dispatch({
        //   type: DELETE_USER
        // });
        return e;
      })
      .catch(e => console.log(e));
  };
};
