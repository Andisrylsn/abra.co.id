import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
          <Route path="/services" Component={ServicesPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
