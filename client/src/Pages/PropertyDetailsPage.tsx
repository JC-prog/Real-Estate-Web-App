import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PropertyDetailsPage.css"

const PropertyDetailsPage: React.FC = () => {
  const location = useLocation();
  const propertyDetails = location.state.propertyDetails;


  if (!propertyDetails) {
    return <div>No property details found.</div>;
  }

  // Now you can use propertyDetails to display the property details in your component
  const formattedListingDate = new Date(propertyDetails.listingDate).toLocaleDateString();
  return (
    <div>
      <h2>{propertyDetails.propertyName}</h2>
      <p>{propertyDetails.propertyAddress}</p>
      <p>{propertyDetails.propertyType}</p>
      <p>{propertyDetails.numberOfRooms}</p>
      <p>{propertyDetails.area}</p>
      <p>{propertyDetails.tenure}</p>
      <p>{propertyDetails.status}</p>
      <p>{propertyDetails.pricePerSquareFeet}</p>
      <p>{propertyDetails.price}</p>
      <p>{formattedListingDate}</p>
    </div>
  );
};

export default PropertyDetailsPage;
