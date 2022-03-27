import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Question from "./components/Question";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-primary my-3">
        Organic Vegetables Hat
      </h1>
      <Home></Home>
      <div className="container my-5">
        <Question></Question>
      </div>
    </div>
  );
};

export default App;
