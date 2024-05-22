import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import api from '../api/loginApi';
import "./PropertyTable.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Interface
interface Property {
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    propertyStatus: string;
    price: number;
}

interface PropertyTableProps {
    data: Property[];
}

const AgentListingCard: React.FC<PropertyTableProps> = ({ data = [] }) => {
    const [refresh, setRefresh] = useState(false);
    const [properties, setProperties] = useState<Property[]>([]);
    const navigate = useNavigate();

    if (data.length === 0) {
        return <p>No properties available.</p>;
    }

    const viewProperty = async (propertyId: string) => {
        const propertyData = { propertyId };

        navigate(`/property/${propertyId}`);
    }

    const formatPrice = (price: number | string) => {
        const priceNumber = Number(price);
    
        if (isNaN(priceNumber)) {
            console.error('Price is not a valid number:', price);
            return '0.00'; // Return a default formatted price for invalid numbers
        }
    
        const formattedPrice = priceNumber.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    
        return formattedPrice;
    }

    return (
        <>
            {data.map((property) => (
               <div className="listing-container">
                    <div className="listing-picture">
                        <img src={"/HousePic.jpg"} />
                    </div>

                    <div className="listing-details">
                        <div className="listing-name">
                            <h1>{ property.propertyName }</h1>

                            <div className="listing-description">
                                <h2>Description</h2>
                                <p>{ property.propertyAddress }</p>
                                <p>$ { formatPrice(property.price) }</p>
                            </div>
                        </div>

                        <div className="profile-buttons">
                            <button onClick={() => viewProperty(property.propertyId)}>View</button>
                        </div>
                    </div>
                </div>
            ))}
        </>      
    );
};

export default AgentListingCard;
