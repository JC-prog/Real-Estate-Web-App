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

    const handlepropertyStateButton = async (propertyId: string, propertyName: string) => {
        const propertyData = { propertyId, propertyName };

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

    const handleViewButton = async (propertyId: string, propertyName: string) => {
        const propertyData = { propertyId, propertyName };

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
                        <div>
                            <button
                                onClick={() => handlepropertyStateButton(property.propertyId, property.propertyName)}
                            >
                                {property.propertyStatus === 'active' ? 'Suspend' : 'Unsuspend'}
                            </button>
                            <button onClick={() => handleViewButton(property.propertyId, property.propertyName)}>View</button>
                        </div>
                    </td>
                </tr>
            ))}
        </>      
    );
};

export default PropertyTable;
