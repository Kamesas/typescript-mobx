import { createStore } from "redux";

interface iAction {
  type: string;
  payload: number;
}

const initialState: number = 0;

function reducer(state: number = initialState, action: iAction) {
  switch (action.type) {
    case "ADD":
      return (state = state + 1);
      break;

    default:
      return state;
      break;
  }
}
