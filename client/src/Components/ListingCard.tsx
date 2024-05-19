import React from 'react';
import './ListingCard.css';

interface ListingCardProps {
    propertyName: string;
    address: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    price: number;
    propertyType: string;
    squareFootage: number;
}

const ListingCard: React.FC<ListingCardProps> = ({
    propertyName,
    address,
    numberOfBedrooms,
    numberOfBathrooms,
    price,
    propertyType,
    squareFootage
}) => {
    return (
        <div className='listing-div-wrapper'>
            <h2 className='listing-title'>{propertyName}</h2>
            <div className="listing-image-wrapper">
                <img src='./apartment-sample.jpg' alt="property" />
            </div>

            <div className="description-div">
                <p>{address}</p>
                <p>{numberOfBedrooms} Room</p>
                <p>{numberOfBathrooms} Bathrooms</p>
                <p>${price}</p> {/* Format the price to 2 decimal places */}
                <p>{propertyType}</p>
                <p>{squareFootage}FT</p>
            </div>
        </div>
    );
};

export default ListingCard;
