import * as React from "react";
import Header from "./app/Header";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <Header nameTest="Alex" />
    </div>
  );
};

export default App;
