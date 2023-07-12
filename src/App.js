import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/abra.co.id" Component={MorePage}></Route>
          <Route path="/abra.co.id/more" Component={MorePage}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
