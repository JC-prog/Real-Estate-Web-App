import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import "./App.css";
// Components

// Pages
import Home from "./Pages/Home";

import Buy from "./Pages/User/Buy";
import BuyerWatchList from "./Pages/User/BuyerWatchList";
import PropertySearch from "./Pages/User/PropertySearch";
import Sell from "./Pages/User/Sell";
import RateAgent from "./Pages/User/RateAgent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserProfile from "./Pages/User/UserProfile";
import MortgageCalculator from "./Pages/MortgageCalculator";
import PropertyDetailsPage from "./Pages/PropertyDetailsPage";

// Admin Pages
import Admin from "./Pages/Admin/AdminHome";
import AdminCreateUser from "./Pages/Admin/AdminCreateUser";
import AdminViewUsers from "./Pages/Admin/AdminViewUsers";
import AdminViewListings from "./Pages/Admin/AdminViewListings";

// Agent Pages
import AgentsHomePage from "./Pages/Agents/AgentsHome";
import AgentProfile from "./Pages/Agents/AgentProfile";
import AgentDashboard from "./Pages/Agents/AgentDashboard";
import AgentCreateListing from "./Pages/Agents/AgentCreateListing";

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
            <Route path="/buy/watchlist" element={<BuyerWatchList />} />
            <Route path="/properties-search" element={<PropertySearch />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/sell/rateAgent" element={<RateAgent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/mortgage-calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/agents" element={<AgentsHomePage />} />
            <Route path="/agent/:agentId" element={<AgentProfile />} />
            <Route path="/agent-dashboard" element={<AgentDashboard />} />
            <Route path="/agent-create-listing" element={<AgentCreateListing />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create-user" element={<AdminCreateUser />} />
            <Route path="/admin/view-users" element={<AdminViewUsers />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route
              path="/admin/view-listings"
              element={<AdminViewListings />}
            />
            <Route
              path="/property/:propertyId"
              element={<PropertyDetailsPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
