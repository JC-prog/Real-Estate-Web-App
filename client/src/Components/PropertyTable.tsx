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
}

interface PropertyTableProps {
    data: Property[];
}

const PropertyTable: React.FC<PropertyTableProps> = ({ data = [] }) => {
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    if (data.length === 0) {
        return <p>No propertys available.</p>;
    }

    const viewProperty = async (propertyId: string) => {

        navigate(`/property/${propertyId}`);
    }

    const removeListing = async (propertyId: string) => {

        try {
            const response: any = await api.delete(`api/properties/${propertyId}`, {
                params: {
                    propertyId : propertyId
                }
            });

            console.log('API response:', response);

            toast.success("Delete Listing Successful", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

            window.location.reload();

        } catch (error) {
            console.error('Failed to fetch property data:', error);

            toast.error("Delete Listing Failed", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
           
        }
    }

    const changePropertyStatus = async (propertyId: string, propertyStatus: string) => {
        if (propertyStatus == "Sold")
        {
            propertyStatus = "New";
        } else 
        {
            propertyStatus = "Sold";
        }

        try {
            const response: AxiosResponse = await api.put(`api/properties/${propertyId}/update-status`, {
                params: {
                    propertyId : `${ propertyId }`,
                    propertyStatus: `${ propertyStatus }`
                }
            });

            toast.success("property updated", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

            window.location.reload();

        } catch (error) {
            console.error('Error:', error);

            toast.error("Error updating property", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }

    return (
        <>
            {data.map((property) => (
                <tr key={property.propertyId}>
                    <td>{property.propertyId}</td>
                    <td>{property.propertyName}</td>
                    <td>{property.propertyAddress}</td>
                    <td>{property.propertyStatus}</td>
                    <td>
                        <div className="button-container">
                            <button 
                                className="property-view-btn"
                                onClick={() => viewProperty(property.propertyId)}
                            >
                                View
                            </button>
                            <button 
                                className="property-state-btn"
                                onClick={() => changePropertyStatus(property.propertyId, property.propertyStatus)}
                            >
                                {property.propertyStatus === 'Sold' ? 'Re-List' : 'De-List'}
                            </button>
                            <button 
                                className="property-remove-btn"
                                onClick={() => removeListing(property.propertyId)}
                            >
                                Remove
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </>      
    );
};

export default PropertyTable;
