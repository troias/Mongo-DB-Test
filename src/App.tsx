import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { Context, uri } from "./store/context";

function App() {
  const ctx = useContext(Context);

  console.log("App", ctx);

  console.log("uri", uri);

  console.log(ctx);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
