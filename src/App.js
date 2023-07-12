import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/abra.co.id" Component={MorePage}></Route>
          <Route path="/abra.co.id/more" Component={MorePage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
