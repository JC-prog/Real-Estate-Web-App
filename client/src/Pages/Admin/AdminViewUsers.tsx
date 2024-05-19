// Imports
import React, { useEffect, useState } from 'react';
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
    results: ApiResponseUsers[];
}

interface ApiResponseUsers {
    id: string;
    userName: string;
    email: string;
    role: string;
    state: string;
}

const AdminViewUsers: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

     // Function to fetch user data
     const getAllUserData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get<ApiResponse>('/api/admin/getUsers');

            console.log('API response:', response.data);

            // Map the response data to match the Users interface
            const mappedUsers: Users[] = response.data.results.map((item) => ({
                userId: item.id,
                userName: item.userName,
                userEmail: item.email,
                userRole: item.role,
                userState: item.state,
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

    return (
        <div className="admin-view-users">
            <h1>View Users</h1>
            <button onClick={getAllUserData}>Get All Users</button>

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