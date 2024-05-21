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
        const propertyData = { propertyId };

        navigate(`/property/${propertyId}`);
    }

    const changePropertyState = async (propertyId: string) => {
        const propertyData = { propertyId};

        try {
            const response: AxiosResponse = await api.post('api/admin/handle-property-state', propertyData);

            toast.success("property updated", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

            // Trigger re-render
            setRefresh(prevRefresh => !prevRefresh);

        } catch (error) {
            console.error('Error:', error);

            toast.error("Error updating property", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }

    const removeProperty = async (propertyId: string) => {
        const propertyData = { propertyId };

        navigate(`/property/${propertyId}`);
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
                                onClick={() => changePropertyState(property.propertyId)}
                            >
                                {property.propertyStatus === 'Listed' ? 'Delist' : 'List'}
                            </button>
                            <button 
                                className="property-remove-btn"
                                onClick={() => removeProperty(property.propertyId)}
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
