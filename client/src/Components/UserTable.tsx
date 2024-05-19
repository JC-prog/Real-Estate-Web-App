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

interface UserTableProps {
    data: Users[];
}

const UserTable: React.FC<UserTableProps> = ({ data = [] }) => {
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    if (data.length === 0) {
        return <p>No users available.</p>;
    }

    const handleUserStateButton = async (userId: string, userName: string) => {
        const userData = { userId, userName };

        try {
            const response: AxiosResponse = await api.post('api/admin/handle-user-state', userData);

            toast.success("User updated", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });

            // Trigger re-render
            setRefresh(prevRefresh => !prevRefresh);

        } catch (error) {
            console.error('Error:', error);

            toast.error("Error updating user", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }
    }

    const handleViewButton = async (userId: string, userName: string) => {
        const userData = { userId, userName };

        navigate(`/user/${userId}`);
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
                        <div>
                            <button
                                onClick={() => handleUserStateButton(user.userId, user.userName)}
                            >
                                {user.userState === 'active' ? 'Suspend' : 'Unsuspend'}
                            </button>
                            <button onClick={() => handleViewButton(user.userId, user.userName)}>View</button>
                        </div>
                    </td>
                </tr>
            ))}
        </>      
    );
};

export default UserTable;
