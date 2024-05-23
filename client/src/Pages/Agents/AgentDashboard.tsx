import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AgentListingManagementCard from "../../Components/AgentListingManagementCard";
import './AgentDashboard.css';
import api from '../../api/loginApi';

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

interface ApiResponseProperties {
    results: any[];
}

const getCookieValue = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
};

const AgentDashboard = () => {
    const [userId, setUserId] = useState('');
    const [properties, setProperties] = useState<Property[]>([]);
    const { propertiesId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in by checking local storage
        const token = getCookieValue('token');

        const response = api.get('api/auth/check-auth', {
            params: {
              token: token
            }
        }).then(response => {
            console.log(response.data.userId);
            setUserId(response.data.userId);
        });
    }, []);

    const fetchProperties = async () => {

        try {
            const response: any = await api.get(`api/properties/properties-agent`, {
                params: {
                    agentId : `${ userId }`
                }
            });

            console.log('API response:', response);

            const mappedProperties: Property[] = response.data.results.map((item:any) => ({
                propertyId: item.propertyId,
                propertyName: item.propertyName,
                propertyAddress: item.propertyAddress,
                propertyType: item.propertyType,
                numberOfRooms: item.numberOfRooms,
                area: item.area,
                tenure: item.tenure,
                status: item.status,
                pricePerSquareFeet: item.pricePerSquareFeet,
                price: item.price,
                agentId: item.agentI,
                sellerId: item.sellerId,
                listingDate: item.listingDate
            }));

            setProperties(mappedProperties);
            console.log(properties);

        } catch (error) {
            console.error('Failed to fetch property data:', error);
           
        }
    };

    const createListing = async () => {
        navigate("/agent-create-listing");
    }

  return (
    <>
        <div className="agent-dashboard-container">
            <h1>AgentDashboard</h1>
            <div className="section">
                <h2>Listing Management</h2>
                <div className="button-container">
                    <button className="agent-btn" onClick={fetchProperties}>View Listings</button>
                    <button className="agent-btn" onClick={createListing}>Create Listing</button>
                </div>
                <AgentListingManagementCard data={properties} />
            </div>
        </div>
    </>
  )
}   

export default AgentDashboard