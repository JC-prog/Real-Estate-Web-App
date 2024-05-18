// Imports
import React, { useEffect, useState } from 'react';
import api from '../../api/loginApi';

// Component
import "./AdminCreateUser.css";

// Interface

const AdminCreateUser: React.FC = () => {
    const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

    return (
        <div className="admin-create-user-container">
            <div className="admin-create-user-wrapper">
                <h1>Create a User</h1>
                <form>
                    <div className="admin-create-user-role-wrapper">
                        <label><input type="radio" name="role" value="admin"></input>Admin</label>

                        <label><input type="radio" name="role" value="user"></input>User</label>

                        <label><input type="radio" name="role" value="agent"></input>Agent</label>
					</div>

					<div>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>

					
					
					<div className='admin-create-user-button-div'>
						<button type="submit">Save</button>
                        <button>Reset</button>
					</div>
				</form>
            </div>
        </div>
    );
};

export default AdminCreateUser;