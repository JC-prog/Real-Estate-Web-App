import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AgentListingCard from "../../Components/AgentListingCard";

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

const PropertySearch: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const location = useLocation();

    useEffect(() => {
        const searchData = location.state && location.state.searchData;

        if (searchData) {
            setProperties(searchData.results);
        }
    }, [location.state]);

    return (
        <div>
            <h1>Search</h1>
            <div className="listing-agent">
                <h1>Listing</h1> 
                <AgentListingCard data={properties} />
            </div>
        </div>
    );
}

export default PropertySearch;
