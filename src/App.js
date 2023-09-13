import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

import "./App.css";
import Home from "./pages/home/Home";
import OrderInfo from "./pages/order/OrderInfo";
import { StorageProvider } from "./storage/StorageContext";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);
  return (
    <div className="App">
      <StorageProvider>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/order" element={<OrderInfo />} />
          </Routes>
        </Router>
      </StorageProvider>
    </div>
  );
}

export default App;
