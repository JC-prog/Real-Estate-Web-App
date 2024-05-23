import React, { useEffect, useState } from 'react';
import api from '../api/loginApi';
import './Logo.css';

const getCookieValue = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
};

const Logo: React.FC = () => {
    const [userType, setUserType] = useState<string | null>(null);
    const [hrefRoute, setRoute] = useState('/');

    const getUserRole = async (): Promise<string | undefined> => {
        const token = getCookieValue("token");
        try {
            const response = await api.get("api/auth/check-auth", {
                params: {
                    token: token,
                },
            });
            console.log("response", response.data);
            console.log("this one returns the user id", response.data.userId);
            console.log("this one is the usertype", response.data.userRole);
            return response.data.userRole;
        } catch (error) {
            console.error("Error getting userID", error);
            throw error; // Propagate the error to the caller
        }
    };

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                const userType = await getUserRole();

                setUserType(userType ?? null);

                if (userType === 'Admin')
                {
                    setRoute('/admin');    
                } else if (userType === 'Agent')
                {
                    setRoute('/agent-dashboard');
                }
                

            } catch (error) {
                console.error("Failed to fetch user type", error);
            }
        };

        fetchUserType();
    }, []);

    console.log(userType);
    return (
        <div className='logo-div-wrapper'>
            <a href={hrefRoute} className='logo-wrapper'>
                <div className='logo-img-wrapper'>
                    <img id='logo-img' src='/grpnaem-Logo.png' alt='Logo' />
                    <span>GrpNaem</span>
                </div>
            </a>
        </div>
    );
};

export default Logo;
