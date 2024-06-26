import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PropertyDetailsPage.css"

const PropertyDetailsPage: React.FC = () => {
  const location = useLocation();
  const propertyDetails = location.state.propertyDetails;

  console.log(propertyDetails);

  if (!propertyDetails) {
    return <div>No property details found.</div>;
  }

  // Now you can use propertyDetails to display the property details in your component
  const formattedListingDate = new Date(propertyDetails.listingDate).toLocaleDateString();
  return (
    <div className="container">
      <div className="image-container">
        <img
            className="image-listing"
            src="/apartment-sample.jpg"
            alt="property"
          />
      </div>
      <div className="info-wrapper">
        <div className="title">
            <h1 className="heading">{propertyDetails.propertyName}</h1>
            <p className="address">{propertyDetails.propertyAddress}</p>
        </div>

        <div className="details">
          <p>{propertyDetails.propertyType}</p>
          <p>{propertyDetails.numberOfRooms} Rooms</p>
          <p>{propertyDetails.area} Sqft</p>
          <p>{propertyDetails.tenure}</p>
          <p>{propertyDetails.status}</p>
          <p>${propertyDetails.pricePerSquareFeet} Psqft</p>
          <p>${propertyDetails.price}</p>
          <p>Listed on {formattedListingDate}</p>
        </div>


      </div>
      <p className="About"> About This Property: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum
        </p>
    </div>
  );
};

export default PropertyDetailsPage;
