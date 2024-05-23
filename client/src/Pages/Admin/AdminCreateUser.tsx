// Imports
import React, { useEffect, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../api/loginApi';

// Component
import "./AdminCreateUser.css";

// Interface

const AdminCreateUser: React.FC = () => {
    const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('admin');
    const navigate = useNavigate();

    const setUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
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
        navigate('/admin');
      };

    return (
        <div className="admin-create-user-container">
            <div className="admin-create-user-wrapper">
                <h1>Create a User</h1>
                <form onSubmit={submitCreateUserForm}>
                    <div className="admin-create-user-role-wrapper">
                        <label><input type="radio" name="role" value="admin" onChange={setUserRole} checked={role === 'admin'}></input>Admin</label>

                        <label><input type="radio" name="role" value="user" onChange={setUserRole} checked={role === 'user'}></input>User</label>

                        <label><input type="radio" name="role" value="agent" onChange={setUserRole} checked={role === 'agent'}></input>Agent</label>
					</div>

					<div>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={setUserName}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={setUserEmail}
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={setUserPassword}
							required
						/>
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

export default AdminCreateUser;