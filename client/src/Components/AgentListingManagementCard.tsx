import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import api from '../api/loginApi';
import "./AgentListingManagementCard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Interface
interface Property {
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

interface PropertyTableProps {
    data: Property[];
}

const AgentListingManagementCard: React.FC<PropertyTableProps> = ({ data = [] }) => {
    const [refresh, setRefresh] = useState(false);
    const [properties, setProperties] = useState<Property[]>([]);
    const navigate = useNavigate();

    console.log(data);

    if (data.length === 0) {
        return <p>No properties available.</p>;
    }

    const viewListing = async (propertyId: number) => {

        const response = await api.get('/api/properties/${propertyId}', {
			params: {
			  propertyId: propertyId
			},
		  });

        const propertyData = response.data.results[0];

        navigate(`/property/${propertyId}`, {
            state: {
              propertyDetails: {
                propertyName: propertyData.propertyName,
                propertyAddress: propertyData.propertyAddress,
                propertyType: propertyData.propertyType,
                numberOfRooms: propertyData.numberOfRooms,
                area: propertyData.area,
                tenure: propertyData.tenure,
                status: propertyData.propertyStatus,
                pricePerSquareFeet: propertyData.pricePerSquareFeet,
                price: propertyData.price,
                listingDate: propertyData.listingDate,
              },
            },
          });
    }
    
    
    const editListing = (property: Property) => {
        navigate(`/agent/edit-listing/${property.propertyId}`, {
            state: { propertyDetails: property },
        });
    };
    

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

                        <div className="property-management-buttons">
                            <button className="property-view-btn" onClick={() => viewListing(property.propertyId)}>View</button>
                            <button className="property-edit-btn" onClick={() => editListing(property)}>Edit</button>
                            <button className="property-remove-btn">Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </>      
    );
};

export default AgentListingManagementCard;
