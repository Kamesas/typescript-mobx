import { UsersActions } from "./action";

interface iUsers {
  id: number | string;
  name: string;
  username?: string;
  email?: string;
  [key: string]: any;
}

interface iUsersReducer {
  users: iUsers[];
}

const initialState: iUsersReducer = {
  users: []
};

export function users(
  state = initialState,
  action: UsersActions
): iUsersReducer {
  switch (action.type) {
    case "GET_USERS":
      console.log(state);
      return { users: [...state.users, action.payload] };

    default:
      return state;
  }
}
