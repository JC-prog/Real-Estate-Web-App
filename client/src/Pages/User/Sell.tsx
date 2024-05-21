import React, { useEffect, useState } from "react";
import "./Sell.css";
import { useNavigate } from "react-router-dom";
//import CreateListingForm from "../../Components/CreateListing";

const form = "";

const handleFormDisplay = (formType: string) => {
  console.log(formType);
};

const RateAgentButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sell/rateAgent"); // Replace with your route path
  };

  return (
    <button className="action-btn" onClick={handleClick}>
      Rate Agent 111
    </button>
  );
};
const SellPage: React.FC = () => {
  return (
    <>
      <h3 className="title"> What would you like to do?</h3>
      <div className="container">
        <div className="action-btns-wrapper">
          <button
            onClick={() => handleFormDisplay("createListing")}
            className="action-btn"
          >
            Create Listing
          </button>
          <button className="action-btn">Edit a Listing</button>
          <RateAgentButton />
          <button className="action-btn">Review Agent</button>
        </div>

        <div className="form-field">{form}</div>
      </div>
    </>
  );
};

export default SellPage;
