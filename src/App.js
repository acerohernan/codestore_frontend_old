import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="" />
        <Route exact element={<About />} path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
