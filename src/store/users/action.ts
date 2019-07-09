import { UsersActions, iUser, GET_USERS, DELETE_USER } from "./types";

export const getUsersAPI = (users: iUser): UsersActions => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export function fetchFunction() {
  return (dispatch: any) => {
    fetch("https://react-redux-firebase-1-77d47.firebaseio.com/users.json")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getUsersAPI(res));
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const deleteUser = () => {
  return (dispatch: any) => {
    fetch(
      "https://react-redux-firebase-1-77d47.firebaseio.com/users/-LUPBtiPSGDzNpH_tW_r.json",
      {
        method: "DELETE"
      }
    )
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
    fetch("https://react-redux-firebase-1-77d47.firebaseio.com/users.json", {
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
