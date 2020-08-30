import React from "react";
import "./App.css";
import { Alert } from "react-bootstrap";

function App() {
  const test = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));

  return (
    <div className="App">
      {test}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
