import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FunctionExample from "./Routes/FunctionExample/FunctionExample";
import ClassExample from "./Routes/ClassExample/ClassExample";
import Home from "./Routes/Home";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/functionexample" element={<FunctionExample />} />
      <Route path="/classexample" element={<ClassExample />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

if (module && module.hot) {
  module.hot.accept();
}
