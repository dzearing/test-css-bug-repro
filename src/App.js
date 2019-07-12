import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "office-ui-fabric-react";
import styled from "styled-components";

const NewPrimaryButton = styled(PrimaryButton)`
  background-color: red;

  :hover {
    background-color: green;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <PrimaryButton text="hello, world!" />
        <NewPrimaryButton text="hello, world!" />
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
