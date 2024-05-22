// Imports
import React, { useEffect, useState } from "react";
import api from "../../api/loginApi";

// Component
import ListingCard from "../../Components/ListingCard";
import "./Buy.css";

// Interface
interface Property {
  // propertyName: string;
  // address: string;
  // numberOfBedrooms: number;
  // numberOfBathrooms: number;
  // price: number;
  // propertyType: string;
  // squareFootage: number;
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

interface ApiResponse {
  results: Property[];
}

const BuyPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get<ApiResponse>("/api/buy"); // Adjust the URL as necessary
        console.log("API response:", response.data); // Debugging line
        // console.log(response.data.results[0].propertyId)
        setProperties(response.data.results);
      } catch (error) {
        setError("Failed to fetch agents");
        console.error("Error fetching agents:", error);
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
          // propertyName={property.propertyName}
          // address={property.address}
          // numberOfBedrooms={property.numberOfBedrooms}
          // numberOfBathrooms={property.numberOfBathrooms}
          // price={property.price}
          // propertyType={property.propertyType}
          // squareFootage={property.squareFootage}
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

export default BuyPage;
