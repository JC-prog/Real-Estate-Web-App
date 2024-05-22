// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import api from '../../api/loginApi';
import "./AgentProfile.css";

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

const AgentProfile: React.FC = () => {
    const { agentId } = useParams();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {

            try {
                const response: AxiosResponse<ApiResponse> = await api.get(`api/agent/${agentId}`, {
                    params: {
                        userId : `${ agentId }`
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
        
    }, [agentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user && (
                <>
                    <div className="profile-picture">
                        <img src={"/test.jpg"} alt={`${user.userName}'s profile`} />
                    </div>
                    <div className="profile-details">
                        <h1>{user.userName}'s Profile</h1>
                        <p><strong>User ID:</strong> {user.userId}</p>
                        <p><strong>Contact:</strong> {user.userContactNum}</p>
                        <p><strong>Email:</strong> {user.userEmail}</p>
                        <p><strong>Role:</strong> {user.userRole}</p>
                        <p><strong>State:</strong> {user.userState}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default AgentProfile;
