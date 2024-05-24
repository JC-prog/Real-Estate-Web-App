import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api/loginApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AgentEditListing.css";

// Define the PropertyDetails interface
interface PropertyDetails {
    propertyId: number;
    propertyName: string;
    propertyAddress: string;
    propertyType: string;
    numberOfRooms: string;
    area: number;
    tenure: string;
    propertyStatus: string;
    pricePerSquareFeet: number;
    price: number;
    listingDate: string;
    // Add other fields as necessary
}

const AgentEditListing: React.FC = () => {
    const location = useLocation();
    const propertyDetails = location.state?.propertyDetails as PropertyDetails;
    const [formData, setFormData] = useState<PropertyDetails>(propertyDetails);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
			console.log('Form Data:', formData);
            const response = await api.put(`/api/properties/update-listing/${formData.propertyId}`, formData);
            if (response.status === 200) {
                toast.success("Listing updated successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                navigate('/agent-dashboard');
            } else {
                toast.error("Failed to update listing", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
            }
        } catch (error) {
            console.error('Error updating property:', error);
            toast.error("Failed to update listing", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    };

    const handleCancel = () => {
        navigate('/agent-dashboard');
    };

    return (
        <div className="edit-listing-container">
            <div className="edit-listing-wrapper">
                <h1>Edit Listing</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="propertyName">Property Name:</label>
                        <input
                            type="text"
                            id="propertyName"
                            name="propertyName"
                            value={formData.propertyName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="propertyAddress">Property Address:</label>
                        <input
                            type="text"
                            id="propertyAddress"
                            name="propertyAddress"
                            value={formData.propertyAddress}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="propertyType">Property Type:</label>
                        <input
                            type="text"
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="numberOfRooms">Number of Rooms:</label>
                        <input
                            type="text"
                            id="numberOfRooms"
                            name="numberOfRooms"
                            value={formData.numberOfRooms}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="area">Area:</label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="tenure">Tenure:</label>
                        <input
                            type="text"
                            id="tenure"
                            name="tenure"
                            value={formData.tenure}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="pricePerSquareFeet">Price Per Square Feet:</label>
                        <input
                            type="text"
                            id="pricePerSquareFeet"
                            name="pricePerSquareFeet"
                            value={formData.pricePerSquareFeet}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="listingDate">Listing Date:</label>
                        <input
                            type="date"
                            id="listingDate"
                            name="listingDate"
                            value={new Date(formData.listingDate).toISOString().split('T')[0]}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="edit-listing-button-div">
                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AgentEditListing;
