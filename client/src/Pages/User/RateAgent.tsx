import React, { useEffect, useState } from "react";
import "./RateAgent.css";
import { useNavigate } from "react-router-dom";

//import CreateListingForm from "../../Components/CreateListing";

const form = "";

const handleFormDisplay = (formType: string) => {
  console.log(formType);
};

const RateAgent: React.FC = () => {
  return (
    <>
      <h3 className="title">Which Agent would you like to Rate?</h3>
      <h4 className="title">will display Agent details here for rating</h4>
      <div className="container">
        <button className="action-btn">Review Agent</button>

        <div className="form-field">{form}</div>
      </div>
    </>
  );
};

export default RateAgent;
