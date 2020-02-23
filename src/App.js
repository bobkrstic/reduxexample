import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

function App() {
  return (
    <div className="App">
      <hr />
      <Postform />
      <hr />
      <Posts />
      <hr />
    </div>
  );
}

export default App;
