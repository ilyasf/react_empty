import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import "./styles.css";

function App() {
  return (
    <React.Fragment>
        <CssBaseline />
        <div className="App">
            <h1>React APP</h1>
            <h2>Just start doing frontend easy!</h2>
        </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
rootElement && ReactDOM.render(<App />, rootElement);
