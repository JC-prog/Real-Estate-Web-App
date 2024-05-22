import React,{useState} from "react";
import Axios from 'axios';
import "./ListingCard.css";
import api from "../api/loginApi";
import { CatchingPokemonSharp } from "@mui/icons-material";

const getCookieValue = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};
interface ListingCardProps {
  // propertyName: string;
  // address: string;
  // numberOfBedrooms: number;
  // numberOfBathrooms: number;
  // price: number;
  // propertyType: string;
  // squareFootage: number;
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


const ListingCard: React.FC<ListingCardProps> = ({
  // propertyName,
  // address,
  // numberOfBedrooms,
  // numberOfBathrooms,
  // price,
  // propertyType,
  // squareFootage
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
    const token = getCookieValue('token');
    try {
        const response = await api.get('api/auth/check-auth', {
            params: {
                token: token
            }
        });
        console.log(response.data.userId);
        return response.data.userId;
    } catch (error) {
        console.error("Error getting userID", error);
        throw error; // Propagate the error to the caller
    }
}

  const handleAddWatchlist = async () => {
    const buyerId = await getUserID();
    console.log(propertyId);
    console.log(buyerId);

    try {
      console.log(buyerId)
      const response = await Axios.post('http://localhost:8080/api/buy/updateWatchlist', {
        propertyId: propertyId,
        userId: buyerId
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  }

  return (
    <div className="listing-div-wrapper">
        <h2 className='listing-title'>{propertyName}</h2>
      <div className="listing-image-wrapper">
        <img className='image-listing' src="./apartment-sample.jpg" alt="property" />
      </div>
      <div className="description-div">
        <p>{propertyAddress}</p>
        <p>{propertyType}</p>
        <p>{numberOfRooms} Room</p>
        <p>{area}sqft</p>
        <p>${price}</p> {/* Format the price to 2 decimal places */}
        <p>S${pricePerSquareFeet}PSF</p>
      </div>
      <div className="btn-wrapper">
        <button  id="viewBtn">View</button>
        <button onClick={handleAddWatchlist} id="watchlistBtn">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default ListingCard;
