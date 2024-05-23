// UserProfile.tsx
import React, { useEffect, useState, FormEvent} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { AxiosResponse, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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
    const [buttonPopup, rateReviewPopup] = useState(false);
    const [rating, setRating] = useState<number | ''>('');
    const [review, setReview] = useState<string>('');
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
    

    // Rate and Review agent
    const submitReview = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const reviewData = {
            agentId,
            rating,
            review,
        };
    
        try {
            const response: AxiosResponse = await api.post('api/review', reviewData);

            if (response.status == 200) {
                // Handle successful response
                console.log('Review submitted successfully');

                toast.success("Review submitted successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

                rateReviewPopup(false);

            } else {
                // Handle error response
                console.error('Error submitting review');
                
                toast.success("Review submit fail", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

            }

        } catch (error) {
        console.error('Error:', error);

        }
    };
      

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
                                <button onClick={() => rateReviewPopup(true)}>Rate Agent</button>

                                <Popup trigger={buttonPopup} setTrigger={rateReviewPopup}>
                                    <h2>Review Agent</h2>
                                    <form onSubmit={submitReview}>
                                        <label>
                                        Rating:
                                        <input 
                                            type="number" min="1" max="5"
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value === '' ? '' : parseInt(e.target.value))}
                                        />
                                        </label>
                                        <br />
                                        
                                        <label>
                                            Review:
                                            <textarea 
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                            ></textarea>
                                        </label>

                                        <br />
                                        <div className="button-group">
                                        <button type="submit">Submit</button>
                                        <button type="button" className="close-btn" onClick={() => rateReviewPopup(false)}>Close</button>
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
