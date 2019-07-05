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
    case "GET_USERS_API":
      console.log(state);
      return { users: [...state.users, action.payload] };

    case "CONSOLE_LOG":
      console.log(state);
      return state;

    default:
      return state;
  }
}
