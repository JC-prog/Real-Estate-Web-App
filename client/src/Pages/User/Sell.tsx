import React, { useEffect, useState } from "react";
import "./Sell.css";
import api from "../../api/loginApi";
import { useParams, useNavigate } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import SellerListingCard from "../../Components/SellerListingCard";

const getCookieValue = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

// Interface
interface Property {
  propertyId: string;
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
  results: Property[];
}

const SellPage: React.FC = () => {    
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const getUserID = async () => {
    const token = getCookieValue('token');
    try {
        const response = await api.get('api/auth/check-auth', {
            params: {
                token: token
            }
        });
        // console.log(response.data.userId);
        return response.data.userId;
    } catch (error) {
        console.error("Error getting userID", error);
        throw error; // Propagate the error to the caller
    }
  }

  useEffect(() => {
    const fetchProperties = async () => {
      const sellerId = await getUserID();
      console.log(sellerId);
      
      try {
        const response: AxiosResponse<ApiResponseProperties> = await api.get(`api/sell/getPropertiesBySellerId`, {
            params: {
                sellerId : sellerId
            }

        }); 
        console.log("API response:", response.data); // Debugging line

        setProperties(response.data.results);
      } catch (error) {
        setError("Failed to fetch properties");
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  
    return (
      <div className="buy-home-container">
        {properties.map((property) => (
          <SellerListingCard
            propertyId={property.propertyId}
            propertyName={property.propertyName}
            propertyAddress={property.propertyAddress}
            propertyType={property.propertyType}
            numberOfRooms={property.numberOfRooms}
            area={property.area}
            tenure={property.tenure}
            status={property.status}
            pricePerSquareFeet={property.pricePerSquareFeet}
            price={property.price}
            agentId={property.agentId}
            sellerId={property.sellerId}
            listingDate={property.listingDate}
          />
        ))}
      </div>
    );
};

export default SellPage;
