import React, { useEffect, useState } from 'react';
import "./Sell.css";
import createListingForm from "../../Components/CreateListing";

const form = "";

const handleFormDisplay = (formType: string) => {
  console.log(formType)
}

const SellPage:React.FC = () => {
    return (
      <>
        <h3 className='title'> What would you like to do?</h3>
        <div className="container">
          <div className="action-btns-wrapper">
            <button onClick= {() => handleFormDisplay('createListing')} className='action-btn'>Create Listing</button>
            <button className='action-btn'>Edit a Listing</button>
            <button className='action-btn'>Rate Agent</button>
            <button className='action-btn'>Review Agent</button>
          </div>

          <div className="form-field">
            {form}
          </div>

        </div>

      </>
    );
};
  
export default SellPage;