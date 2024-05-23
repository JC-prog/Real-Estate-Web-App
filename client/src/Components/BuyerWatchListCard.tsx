import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ListingCard.css";
import api from "../api/loginApi";
import { CatchingPokemonSharp } from "@mui/icons-material";

const getCookieValue = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
};
interface ListingCardProps {
  propertyId: string;
  propertyName: string;
  propertyAddress: string;
  propertyType: string;
  numberOfRooms: string;
  area: number;
  tenure: string;
  status: string;
  pricePerSquareFeet: number;
  price: number;
  agentId: string;
  sellerId: string;
  listingDate: number;
}

const formatPrice = (price: number | string) => {
  const priceNumber = Number(price);

  if (isNaN(priceNumber)) {
    console.error("Price is not a valid number:", price);
    return "0.00"; // Return a default formatted price for invalid numbers
  }

  const formattedPrice = priceNumber.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedPrice;
};

const BuyerWatchListCard: React.FC<ListingCardProps> = ({
  propertyId,
  propertyName,
  propertyAddress,
  propertyType,
  numberOfRooms,
  area,
  tenure,
  status,
  pricePerSquareFeet,
  price,
  agentId,
  sellerId,
  listingDate,
}) => {
  const getUserID = async () => {
    const token = getCookieValue("token");
    try {
      const response = await api.get("api/auth/check-auth", {
        params: {
          token: token,
        },
      });
      console.log(response.data.userId);
      return response.data.userId;
    } catch (error) {
      console.error("Error getting userID", error);
      throw error; // Propagate the error to the caller
    }
  };

  return (
    <div className="listing-div-wrapper">
      <h2 className="listing-title">{propertyName}</h2>
      <div className="listing-image-wrapper">
        <img
          className="image-listing"
          src="/apartment-sample.jpg"
          alt="property"
        />
      </div>
      <div className="description-div">
        <p>{propertyAddress}</p>
        <p>{propertyType}</p>
        <p>{numberOfRooms} Room</p>
        <p>{area}sqft</p>
        <p>${formatPrice(price)}</p>{" "}
        {/* Format the price to 2 decimal places */}
        <p>S${pricePerSquareFeet}PSF</p>
      </div>
    </div>
  );
};

export default BuyerWatchListCard;
