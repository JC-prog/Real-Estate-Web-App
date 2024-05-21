import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import api from '../api/loginApi';
import "./UserTable.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

interface UserTableProps {
    data: Users[];
}

const UserTable: React.FC<UserTableProps> = ({ data = [] }) => {
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    if (data.length === 0) {
        return <p>No users available.</p>;
    }

    // View Individual User
    const handleViewButton = async (userId: string) => {

        navigate(`/user/${userId}`);
    }

    // Change State of User
    const handleUserStateButton = async (userId: string) => {
        try {
            const response: AxiosResponse = await api.put(`api/user/${userId}`, {
                params: {
                    userId : `${ userId }`
                }
            });

            toast.success("User updated", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

        } catch (error) {
            console.error('Error:', error);

            toast.error("Error updating user", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }

    // Remove a User
    const handleUserRemoveButton = async (userId: string) => {
        try {
            const response: AxiosResponse = await api.delete(`api/user/${userId}`, {
                params: {
                    userId : `${ userId }`
                }
            });

            toast.success("User removed", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

        } catch (error) {
            console.error('Error:', error);

            toast.error("Error removing user", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }

    return (
        <>
            {data.map((user) => (
                <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.userRole}</td>
                    <td>{user.userState}</td>
                    <td>
                        <div className="button-container">
                            <button 
                                className="user-view-btn"
                                onClick={() => handleViewButton(user.userId)}
                            >
                                View
                            </button>

                            <button 
                                className="user-state-btn"
                                onClick={() => handleUserStateButton(user.userId)}
                            >
                                {user.userState === 'Active' ? 'Deactivate' : 'Activate'}
                            </button>

                            <button 
                                className="user-remove-btn"
                                onClick={() => handleUserRemoveButton(user.userId)}
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

export default UserTable;
