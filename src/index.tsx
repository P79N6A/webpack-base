import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function App() {
  return (
    <div className="ss">
      <p className="a">
        <span className="d">d</span>
      </p>
      <p className="b">
        <span className="d">e</span>
      </p>
      <p className="c">
        <span className="d">f</span>
      </p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
