// Imports
import React, { useEffect, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../api/loginApi';

// Component
import "./AgentCreateListing.css";

// Interface

const AgentCreateListing: React.FC = () => {
    const [propertyName, setName] = useState('');
    const [propertyAddress, setAddress] = useState('');
    const [propertyType, setType] = useState('');
    const 

    const navigate = useNavigate();

    const setPropertyName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPropertyname(event.target.value);
	};

	const setUserEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const setUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

    const setUserRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRole(event.target.value);
	};

    const handleApiResponse = async () => {

		const userData = { username, email, password, role };

		try {
			const response: AxiosResponse = await api.post('api/auth/register', userData);

			if (response.status == 200) {

				toast.success("Registration Successful", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

                navigate('/admin');

			} else {
				toast.error("Registration Failed", {
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

		if (role == "initialValue")
		{
			alert("Please enter a role");
			return;
		}

		try {
			const testReceived = handleApiResponse();
			console.log(testReceived);
			// Call function to handle response and redirect
			//handleApiResponse(testReceived);

			// Handle success response here, such as redirecting to another page
		} catch (error) {
			console.error('Error:', error);
			// Handle error, such as displaying an error message to the user
		}
	};

    const handleCancel = () => {
        navigate('/agent-dashboard');
      };

    return (
        <div className="admin-create-user-container">
            <div className="admin-create-user-wrapper">
                <h1>Create a Listing</h1>
                <form onSubmit={submitCreateUserForm}>
					<div>
						<label htmlFor="propertyName">Property Name:</label>
						<input
							type="text"
							id="propertyName"
							value={propertyName}
							onChange={setPropertyName}
							required
						/>
					</div>

					<div>
						<label htmlFor="address">Property Address:</label>
						<input
							type="text"
							id="address"
							value={email}
							onChange={setUserEmail}
							required
						/>
					</div>
                        <label htmlFor="address">Property Type:</label>
                            <input
                                type="text"
                                id="address"
                                value={email}
                                onChange={setUserEmail}
                                required
                            />
                    <div>
                        
                    </div>


					<div className='admin-create-user-button-div'>
						<button type="submit">Save</button>
                        <button onClick={handleCancel}>Cancel</button>
					</div>
				</form>
            </div>
        </div>
    );
};

export default AgentCreateListing;