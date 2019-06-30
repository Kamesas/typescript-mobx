import * as React from "react";

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState>(initialState);

function reducer(params: any) {
  console.log(params);
}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
