import React from "react";
import "./App.css";

import TransactionMilestone from "./TransactionMilestone";

function App() {
  return (
    <div className="App">
      <div className="my-2 p-2">
        <h2>Software Development Challenge</h2>
        <div className="my-5 p-2 bg-light">
          <TransactionMilestone />
        </div>
      </div>
    </div>
  );
}

export default App;
