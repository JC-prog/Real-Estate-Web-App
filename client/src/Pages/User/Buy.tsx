// Imports
import React, { useEffect, useState } from 'react';
import api from '../../api/loginApi';

// Component
import ListingCard from "../../Components/ListingCard";
import "./Buy.css";

// Interface
interface Property {
    propertyName: string;
    address: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    price: number;
    propertyType: string;
    squareFootage: number;
}

interface ApiResponse {
    results: Property[];
}

const BuyPage: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties= async () => {
          try {
            const response = await api.get<ApiResponse>('/api/buy'); // Adjust the URL as necessary
            console.log('API response:', response.data); // Debugging line
            setProperties(response.data.results);
          } catch (error) {
            setError('Failed to fetch agents');
            console.error('Error fetching agents:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProperties();
      }, []);

    return (
        <div className="buy-home-container">
            {properties.map((property) => (
                <ListingCard
                    propertyName={property.propertyName}
                    address={property.address}
                    numberOfBedrooms={property.numberOfBedrooms}
                    numberOfBathrooms={property.numberOfBathrooms}
                    price={property.price}
                    propertyType={property.propertyType}
                    squareFootage={property.squareFootage}
                />
            ))}
        </div>
    );
};

export default BuyPage;