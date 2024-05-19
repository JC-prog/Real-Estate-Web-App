// Imports
import React, { useEffect, useState } from 'react';
import PropertyTable from "../../Components/PropertyTable";
import api from '../../api/loginApi';

// Component
import "./AdminViewListings.css";

// Interface
interface Property {
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    propertyStatus: string;
}

interface ApiResponse {
    results: ApiResponseProperties[];
}

interface ApiResponseProperties {
    id: string;
    propertyName: string;
    propertyAddress: string;
    status: string;
}

const AdminViewListings: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

     // Function to fetch property data
     const getAllpropertyData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get<ApiResponse>('/api/admin/getproperties');

            console.log('API response:', response.data);

            // Map the response data to match the propertys interface
            const mappedProperties: Property[] = response.data.results.map((item) => ({
                propertyId: item.id,
                propertyName: item.propertyName,
                propertyAddress: item.propertyAddress,
                propertyStatus: item.status,
            }));

            setProperties(mappedProperties);

            console.log(properties);

        } catch (error) {
            console.error('Failed to fetch property data:', error);
            setError('Failed to fetch property data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-view-propertys">
            <h1>View Properties</h1>
            <button onClick={getAllpropertyData}>Get All properties</button>

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Property ID</th>
                            <th>Property Name</th>
                            <th>Property Address</th>
                            <th>Property Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PropertyTable data={properties} />
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AdminViewListings;