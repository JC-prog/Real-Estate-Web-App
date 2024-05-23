// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import api from '../../api/loginApi';
import './UserProfile.css';

interface User {
    userId: string;
    userName: string;
    userContactNum: string;
    userEmail: string;
    userRole: string;
    userState: string;
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

            try {
                const response: AxiosResponse<ApiResponse> = await api.get(`api/user/${userId}`, {
                    params: {
                        userId : `${ userId }`
                    }
                });

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
        <div className="user-profile-container">
            <h2 className="user-profile-header">User Profile</h2>
            <div className="user-profile-content">
                <div className="user-profile-image">
                    <img src="/cat-pic.jpeg" alt="User" />
                </div>
                <div className="user-profile-info">
                    {user && (
                        <>
                            <p>
                                <span>User ID:</span> {user.userId}
                            </p>
                            <p>
                                <span>User Name:</span> {user.userName}
                            </p>
                            <p>
                                <span>Contact:</span> {user.userContactNum}
                            </p>
                            <p>
                                <span>Email:</span> {user.userEmail}
                            </p>
                            <p>
                                <span>Role:</span> {user.userRole}
                            </p>
                            <p>
                                <span>State:</span> {user.userState}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
