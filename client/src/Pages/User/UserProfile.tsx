// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import api from '../../api/loginApi';

interface User {
    id: string;
    username: string;
    description: string;
}

interface ApiResponse {
    results: User[];
}

const UserProfile: React.FC = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = { userId };

            try {
                const response: AxiosResponse<ApiResponse> = await api.post(`api/user/${userId}`, userData);

                console.log('API response:', response.data); // Debugging line
                
                setUser(response.data.results[0]);

            } catch (error) {
                setError('Failed to fetch user');
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <>
                    <p>User ID: {user.id}</p>
                    <p>User Name: {user.username}</p>
                </>
            )}
        </div>
    );
}

export default UserProfile;
