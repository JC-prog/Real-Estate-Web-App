// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import api from '../../api/loginApi';
import "./AgentProfile.css";

interface User {
    userId: string;
    userName: string;
    userDisplayName: string;
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
                <div className="profile-container">
                    <div className="profile-agent">
                        <div className="profile-picture">
                            <img src={"/test.jpg"} alt={`${user.userName}'s profile`} />
                        </div>

                        <div className="profile-details">
                            <div className="profile-name">
                                <h1>{ user.userDisplayName }</h1>

                                <div className="profile-description">
                                    <h2>Description</h2>
                                    <p>Real Estate Agent for 2 Years</p>
                                </div>

                            </div>

                            <div className="profile-buttons">
                                <button>Rate Agent</button>
                                <button>Contact Agent</button>
                            </div>
                        </div>
                    </div>

                    <div className="listing-agent">
                        <h1>Listing</h1> 
                        <div className="listing-container">
                            <div className="listing-picture">
    
                                <img src={"/HousePic.jpg"} alt={`${user.userName}'s profile`} />
                            </div>

                            <div className="listing-details">
                                <div className="listing-name">
                                    <h1>{ user.userDisplayName }</h1>

                                    <div className="listing-description">
                                        <h2>Description</h2>
                                        <p>Real Estate Address</p>
                                        <p>Price</p>
                                    </div>

                                </div>

                                <div className="profile-buttons">
                                    <button>View</button>
                                </div>
                            </div>
                        </div>

                        <div className="listing-container">
                            <div className="listing-picture">
    
                                <img src={"/HousePic.jpg"} alt={`${user.userName}'s profile`} />
                            </div>

                            <div className="listing-details">
                                <div className="listing-name">
                                    <h1>{ user.userDisplayName }</h1>

                                    <div className="listing-description">
                                        <h2>Description</h2>
                                        <p>Real Estate Address</p>
                                        <p>Price</p>
                                    </div>

                                </div>

                                <div className="profile-buttons">
                                    <button>View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review-agent">
                        <h1>Reviews</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AgentProfile;
