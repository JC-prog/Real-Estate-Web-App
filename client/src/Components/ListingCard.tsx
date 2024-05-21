import React,{useState} from "react";
import Axios from 'axios';
import "./ListingCard.css";

interface ListingCardProps {
  // propertyName: string;
  // address: string;
  // numberOfBedrooms: number;
  // numberOfBathrooms: number;
  // price: number;
  // propertyType: string;
  // squareFootage: number;
  id: string;
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

  const handleAddWatchlist = () => {
    Axios.post('http://localhost:8080',{
      userID : "id001",
      propertyID : "prop001"
    })
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
