import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="App">
      <p>Welcome to Machine-Interface</p>
      <Link to="/interface">Click here to monitor all parts</Link>
    </div>
  );
};
