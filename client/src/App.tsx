import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./Components/Navbar";
import "./App.css";
// Components

// Pages
import Home from "./Pages/Home";

import Buy from "./Pages/User/Buy";
import Sell from "./Pages/User/Sell";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserProfile from "./Pages/User/UserProfile";
import MortgageCalculator from "./Pages/MortgageCalculator";
import AgentsHomePage from "./Pages/Agents/AgentsHome";

// Admin Pages
import Admin from "./Pages/Admin/AdminHome";
import AdminCreateUser from "./Pages/Admin/AdminCreateUser";
import AdminViewUsers from "./Pages/Admin/AdminViewUsers";
import AdminViewListings from "./Pages/Admin/AdminViewListings";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ToastContainer />
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/mortgage-calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/agents" element={<AgentsHomePage />} />

            <Route path="/admin" element={<Admin />}/>
            <Route path="/admin/create-user" element={<AdminCreateUser />}/>
            <Route path="/admin/view-users" element={<AdminViewUsers />}/>
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/admin/view-listings" element={<AdminViewListings />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
