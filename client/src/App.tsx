import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
// Components

// Pages
import Home from "./Pages/Home";
import Buy from "./Pages/User/Buy";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MortgageCalculator from "./Pages/MortgageCalculator";
import AgentsHomePage from "./Pages/Agents/AgentsHome";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/mortgage-calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/agents" element={<AgentsHomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
