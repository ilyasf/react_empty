import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React APP</h1>
      <h2>Just start doing frontend easy!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
rootElement && ReactDOM.render(<App />, rootElement);
