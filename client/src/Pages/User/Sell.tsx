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
  const [userType, setUserType] = useState<string | null>(null);
  const navigate = useNavigate();
  
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

  const getUserType = async (userId:string) => {
    const token = getCookieValue('token');
    try {
      const response = await api.get(`api/user/${userId}`, {
        params: {
          userId:userId
        }
      });
      console.log(response.data.results[0].userType)
      return response.data.results[0].userType; 
    } catch (error) {
      console.error("Error getting user type", error);
      throw error; // Propagate the error to the caller
    }
  }


  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const userId = await getUserID();
        const userType = await getUserType(userId);
        setUserType(userType);

        if(userType == 'admin'){
          console.log("admin login")
          navigate('/admin/view-listings')
        }

        else if (userType !== 'seller') {
          setError("You are not authorized to view this page");
          setLoading(false);
          return;
        }

        if (userId == null) {
          setError("You have no properties listed");
          setLoading(false);
          return;
        }



        const response: AxiosResponse<ApiResponseProperties> = await api.get('api/sell/getPropertiesBySellerId', {
          params: {
            sellerId: userId
          }
        });
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
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
