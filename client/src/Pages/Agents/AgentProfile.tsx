// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import api from '../../api/loginApi';
import AgentListingCard from "../../Components/AgentListingCard";
import Popup from "../../Components/Popup";
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

interface Property {
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    propertyStatus: string;
    price: number;
}

interface ApiResponseUsers {
    results: User[];
}

interface ApiResponseProperties {
    results: Property[];
}



const AgentProfile: React.FC = () => {
    const { agentId } = useParams();
    const { propertiesId } = useParams();
    const [user, setUser] = useState<User>();
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [buttonPopup, setButtonPopup] = useState(false);
    const navigate = useNavigate();
    

    useEffect(() => {
        const fetchUser = async () => {

            try {
                const response: AxiosResponse<ApiResponseUsers> = await api.get(`api/agent/${agentId}`, {
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
    
    useEffect(() => {
        const fetchProperties = async () => {

            try {
                const response: AxiosResponse<ApiResponseProperties> = await api.get(`api/properties/properties-agent`, {
                    params: {
                        agentId : `${ agentId }`
                    }
                });
    
                console.log('API response:', response.data);
    
                // Map the response data to match the propertys interface
                const mappedProperties: Property[] = response.data.results.map((item) => ({
                    propertyId: item.propertyId,
                    propertyName: item.propertyName,
                    propertyAddress: item.propertyAddress,
                    propertyStatus: item.propertyStatus,
                    price: item.price
                }));
    
                setProperties(mappedProperties);
    
                console.log(properties);
    
            } catch (error) {
                console.error('Failed to fetch property data:', error);
                setError('Failed to fetch property data.');
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [propertiesId]);
    

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
                                <button onClick={() => setButtonPopup(true)}>Rate Agent</button>

                                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <h2>Rate Agent</h2>
                                    <form>
                                        <label>
                                        Rating:
                                        <input type="number" min="1" max="5" required />
                                        </label>
                                        <br />
                                        <label>
                                        Review:
                                        <textarea required></textarea>
                                        </label>
                                        <br />
                                        <div className="button-group">
                                        <button type="submit">Submit</button>
                                        <button type="button" className="close-btn" onClick={() => setButtonPopup(false)}>Close</button>
                                        </div>
                                    </form>
                                </Popup>

                                <button>Contact Agent</button>
                            </div>
                        </div>
                    </div>

                    <div className="listing-agent">
                        <h1>Listing</h1> 
                        <AgentListingCard data={properties} />
                        
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
