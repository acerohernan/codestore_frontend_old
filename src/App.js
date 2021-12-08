import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import CardLayout from "./components/CardLayout";
import Home from "./views/Home";
import About from "./views/About";
import Collections from "./views/Collections";
import ProductPage from "./views/ProductPage";

import "./styles/globalStyles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CardLayout>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<About />} exact path="/about" />
            <Route element={<Collections />} exact path="/collections" />
            <Route element={<ProductPage />} path="/product/:id" />
          </Routes>
        </CardLayout>
      </Router>
    </Provider>
  );
}

export default App;
