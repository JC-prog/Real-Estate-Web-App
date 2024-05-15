import React from 'react';
import './ListingCard.css';

interface ListingCardProps {
    propertyName: string;
    address: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    price: number;
    propertyType: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
    propertyName,
    address,
    numberOfBedrooms,
    numberOfBathrooms,
    price,
    propertyType
}) => {
    return (
        <div className='listing-div-wrapper'>
            <div className="listing-image-wrapper">
                <img src='./apartment-sample.jpg' alt="property" />
            </div>
            <div className="description-div">
                <h2>{propertyName}</h2>
                <p>{address}</p>
                <p>{numberOfBedrooms} Room</p>
                <p>{numberOfBathrooms} Bathrooms</p>
                <p>${price}</p> {/* Format the price to 2 decimal places */}
                <p>{propertyType}</p>
            </div>
        </div>
    );
};

export default ListingCard;
