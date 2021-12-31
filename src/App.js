import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import CardLayout from "./components/CardLayout";
import Home from "./views/Home";
import About from "./views/About";
import Collections from "./views/Collections";
import ProductPage from "./views/ProductPage";
import Checkout from "./views/Checkout";
import Thanks from "./views/Thanks";

import "./styles/globalStyles.scss";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/code-store/">
        <CardLayout>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<About />} exact path="/about" />
            <Route element={<Collections />} exact path="/collections" />
            <Route element={<ProductPage />} path="/product/:category/:id" />
            <Route element={<Checkout />} exact path="/checkout" />
            <Route element={<Thanks />} exact path="/checkout/confirm" />
          </Routes>
        </CardLayout>
      </Router>
    </Provider>
  );
}

export default App;
