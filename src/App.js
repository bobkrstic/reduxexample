import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <hr />
        <Postform />
        <hr />
        <Posts />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
