import React from "react";
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
  return (
    <div className="listing-div-wrapper">
      <div className="listing-image-wrapper">
        <img src="./apartment-sample.jpg" alt="property" />
      </div>
      <div className="description-div">
        <h2>{propertyName}</h2>
        <p>{propertyAddress}</p>
        <p>{propertyType}</p>
        <p>{numberOfRooms} Room</p>
        <p>{area}sqft</p>
        <p>${price}</p> {/* Format the price to 2 decimal places */}
        <p>S${pricePerSquareFeet}PSF</p>
      </div>
    </div>
  );
};

export default ListingCard;
