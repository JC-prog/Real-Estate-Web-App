// Imports
import React, { useEffect, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../api/loginApi';

// Component
import "./AgentCreateListing.css";

const getCookieValue = (name: string): string | undefined => {
	const value = `; ${document.cookie}`;
  
	const parts = value.split(`; ${name}=`);
  
	if (parts.length === 2) return parts.pop()?.split(";").shift();
	return undefined;
  };

const AgentCreateListing: React.FC = () => {
    const [propertyName, setName] = useState('');
    const [propertyAddress, setAddress] = useState('');
    const [propertyType, setType] = useState('');
    const [numberOfRooms, setNumOfRooms] = useState('');
    const [area, setArea] = useState('');
    const [tenure, setTenure] = useState('');
    const [price, setPrice] = useState('');
    const [sellerId, setSeller] = useState('');

    const navigate = useNavigate();

    const setPropertyName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

    const setPropertyAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(event.target.value);
	};

    const setPropertyType = (event: React.ChangeEvent<HTMLInputElement>) => {
		setType(event.target.value);
	};

    const setPropertyRooms = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumOfRooms(event.target.value);
	};

    const setPropertyArea = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArea(event.target.value);
	};

    const setPropertyTenure = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTenure(event.target.value);
	};

    const setPropertyPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(event.target.value);
	};

    const setPropertySeller = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSeller(event.target.value);
	};

	const getUserID = async () => {
		const token = getCookieValue("token");
		try {
		  const response = await api.get("api/auth/check-auth", {
			params: {
			  token: token,
			},
		  });
		  console.log("response", response.data);
		  console.log("this one returns the user id", response.data.userId);
		  console.log("this one is the usertype", response.data.user);
		  return response.data.userId;
		} catch (error) {
		  console.error("Error getting userID", error);
		  throw error; // Propagate the error to the caller
		}
	  };

    const handleApiResponse = async () => {

		const agentId = await getUserID();

		const listingData = { propertyName, propertyAddress, propertyType, numberOfRooms, area, tenure, price, sellerId, agentId};

		try {
			const response: AxiosResponse = await api.post('api/properties', listingData);

			if (response.status == 200) {

				toast.success("Create Listing Successful", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

                navigate('/agent-dashboard');

			} else {
				toast.error("Create Failed", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
				
			}
		} catch (error) {
			console.error('Error:', error);
			// Handle error, such as displaying an error message to the user
		}
	};

	const submitCreateUserForm = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const testReceived = handleApiResponse();
			console.log(testReceived);

		} catch (error) {
			console.error('Error:', error);
		}
	};

    const handleCancel = () => {
        navigate('/agent-dashboard');
      };

    return (
        <div className="agent-create-user-container">
            <div className="agent-create-user-wrapper">
                <h1>Create a Listing</h1>
                <form onSubmit={submitCreateUserForm}>
					<div>
						<label htmlFor="propertyName">Property Name:</label>
						<input
							type="text"
							id="propertyName"
							value={propertyName}
							onChange={setPropertyName}
						/>
					</div>

					<div>
						<label htmlFor="address">Property Address:</label>
						<input
							type="text"
							id="address"
                            value={propertyAddress}
							onChange={setPropertyAddress}
						/>
					</div>
                    
                    <div>
						<label htmlFor="address">Property Type:</label>
						<input
							type="text"
							id="address"
                            value={propertyType}
							onChange={setPropertyType}
						/>
					</div>

                    <div>
						<label htmlFor="noOfRooms">Number of Rooms:</label>
						<input
							type="text"
							id="noOfRooms"
                            value={numberOfRooms}
							onChange={setPropertyRooms}
						/>
					</div>

                    <div>
						<label htmlFor="area">Area:</label>
						<input
							type="text"
							id="address"
                            value={area}
							onChange={setPropertyArea}
						/>
					</div>

                    <div>
						<label htmlFor="tenure">Tenure:</label>
						<input
							type="text"
							id="tenure"
                            value={tenure}
							onChange={setPropertyTenure}
						/>
					</div>
                        
                    <div>
						<label htmlFor="price">Price:</label>
						<input
							type="text"
							id="price"
                            value={price}
							onChange={setPropertyPrice}
						/>
					</div>

                    <div>
						<label htmlFor="seller">Seller:</label>
						<input
							type="text"
							id="seller"
                            value={sellerId}
							onChange={setPropertySeller}
						/>
					</div>

					<div className='agent-create-user-button-div'>
						<button type="submit">Save</button>
                        <button onClick={handleCancel}>Cancel</button>
					</div>
				</form>
            </div>
        </div>
    );
};

export default AgentCreateListing;