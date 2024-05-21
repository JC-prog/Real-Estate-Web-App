// Imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from "../../Components/UserTable"
import api from '../../api/loginApi';

// Component
import "./AdminViewUsers.css";

// Interface
interface Users {
    userId: string;
    userName: string;
    userEmail: string;
    userRole: string;
    userState: string;
}

interface ApiResponse {
    results: Users[];
}

const AdminViewUsers: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

     // Function to fetch user data
     const getAllUserData = async () => {
        setLoading(true);
        setError(null);
        try {
            //const response = await api.get<ApiResponse>('/api/user');

            const response = await api.get<ApiResponse>('/api/user', {
                params: {

                }
            });

            console.log('API response:', response.data);

            // Map the response data to match the Users interface
            const mappedUsers: Users[] = response.data.results.map((item) => ({
                userId: item.userId,
                userName: item.userName,
                userEmail: item.userEmail,
                userRole: item.userRole,
                userState: item.userState,
            }));

            setUsers(mappedUsers);

            console.log(users);

        } catch (error) {
            console.error('Failed to fetch user data:', error);
            setError('Failed to fetch user data.');
        } finally {
            setLoading(false);
        }
    };

    const redirectAdminDashboard = () => {
        navigate('/admin');
    };

    return (
        <div className="admin-view-users">
            <h1>View Users</h1>
            <div className="button-container">
                <button className="get-all-users-btn" onClick={getAllUserData}>Get All Users</button>
                <button className="get-all-users-btn" onClick={redirectAdminDashboard}>Back</button>
            </div>
            
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>User State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserTable data={users} />
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AdminViewUsers;