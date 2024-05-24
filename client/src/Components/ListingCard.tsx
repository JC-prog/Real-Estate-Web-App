import React, { useState } from "react";
import Axios from "axios";
import "./ListingCard.css";
import api from "../api/loginApi";
import { CatchingPokemonSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Fab } from "@mui/material";
import { toast } from "react-toastify";

const getCookieValue = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
};

interface ListingCardProps {
  propertyId: number;
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

const ListingCard: React.FC<ListingCardProps> = ({
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
  const navigate = useNavigate();

  const getUserID = async () => {
    const token = getCookieValue("token");
    try {
      const response = await api.get("api/auth/check-auth", {
        params: {
          token: token,
        },
      });
      console.log("response", response.data);
      return response.data.userId;
    } catch (error) {
      console.error("Error getting userID", error);
      throw error; // Propagate the error to the caller
    }
  };

  const getUserType = async (userId: string) => {
    const token = getCookieValue("token");
    try {
      const response = await api.get(`api/user/${userId}`, {
        params: {
          userId: userId,
        },
      });
      console.log(response.data.results[0].userType);
      return response.data.results[0].userType;
    } catch (error) {
      console.error("Error getting user type", error);
      throw error; // Propagate the error to the caller
    }
  };

  const handleAddWatchlist = async () => {
    try {
      const buyerId = await getUserID();
      console.log("propertyId", propertyId);
      console.log("buyerId", buyerId);

      const userType = await getUserType(buyerId);

      console.log("usertype is", userType);

      //if userType is buyer then only the watchlist will be added
      if (userType === "buyer") {
        const response = await api.post("api/buy/updateWatchlist", {
          propertyId: propertyId,
          propertyName: propertyName,
          userId: buyerId,
        });
        toast.success(
          `Property ${propertyName} has been added by User id ${buyerId}`,
          { autoClose: 2000 }
        );
        console.log("Response:", response.data);
      } else {
        toast.error("Only buyers can add Properties to Watchlist");
      }
    } catch (error) {
      navigate("/login");
      toast.error("Login to add Properties to your Watchlist");
      console.error("Error adding to watchlist:", error);
    }
  };

  const handleView = async () => {
    try {
      await api.post(`/api/properties/${propertyId}/increment-views`, {
        propertyId: propertyId,
      });
      navigate(`/property/${propertyId}`, {
        state: {
          propertyDetails: {
            propertyName: propertyName,
            propertyAddress: propertyAddress,
            propertyType: propertyType,
            numberOfRooms: numberOfRooms,
            area: area,
            tenure: tenure,
            status: status,
            pricePerSquareFeet: pricePerSquareFeet,
            price: price,
            listingDate: listingDate,
          },
        },
      }); // Redirect to property details page
    } catch (error) {
      console.error("Error incrementing view counter:", error);
    }
  };

  return (
    <div className="listing-div-wrapper">
      <h2 className="listing-title">{propertyName}</h2>
      <div className="listing-image-wrapper">
        <img
          className="image-listing"
          src="./apartment-sample.jpg"
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
      <div className="btn-wrapper">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab aria-label="View" onClick={handleView}>
            <InfoRoundedIcon fontSize="medium" />
          </Fab>
          {/* <button onClick={handleView} id="viewBtn">
          View
        </button> */}
          <Fab
            variant="extended"
            aria-label="Add to WatchList"
            onClick={handleAddWatchlist}
          >
            <FavoriteIcon sx={{ mr: 1 }} />
            Add to watchlist
          </Fab>
        </Box>
        {/* <button onClick={handleAddWatchlist} id="watchlistBtn">
          Add to Watchlist
        </button> */}
      </div>
    </div>
  );
};

export default ListingCard;
