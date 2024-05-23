import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import AgentListingManagementCard from "../../Components/AgentListingManagementCard";
import './AgentDashboard.css';
import api from '../../api/loginApi';

// Interface
interface Property {
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    propertyStatus: string;
    price: number;
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

            console.log(response.data);

            // Map the response data to match the propertys interface
            const mappedProperties: Property[] = response.data.results.map((item:any) => ({
                propertyId: item.propertyId,
                propertyName: item.propertyName,
                propertyAddress: item.propertyAddress,
                propertyStatus: item.propertyStatus,
                price: item.price
            }));

            console.log(properties);

            setProperties(mappedProperties);

            

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