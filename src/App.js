import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CardLayout from "./components/CardLayout";
import Home from "./views/Home";
import About from "./views/About";

import "./styles/globalStyles.css";

function App() {
  return (
    <Router>
      <CardLayout>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<About />} exact path="/about" />
        </Routes>
      </CardLayout>
    </Router>
  );
}

export default App;
