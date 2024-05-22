import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import api from '../api/loginApi';
import axios from 'axios';

import Logo from "./Logo";
import SearchBar from "./SearchBar";

import "./Navbar.css";

const getCookieValue = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
};


const Navbar: React.FC = () => {
    const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [, , removeCookie] = useCookies(['token']);

    const handleMouseEnter = (menuName: string) => {
        setVisibleDropdown(menuName);
    };

    const handleMouseLeave = () => {
        setVisibleDropdown(null);
    };

    useEffect(() => {
        // Check if the user is logged in by checking local storage
        const token = getCookieValue('token');

        const response = api.get('api/auth/check-auth', {
            params: {
              token: token
            }
        });

        console.log(response);

        console.log(token);

        console.log(token);
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        // Remove the token from local storage and update state
        removeCookie('token', { path: '/' });
        setIsAuthenticated(false);
    };

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo-container">
                    <Logo />
                </div>

                <div className="navbar-menu">
                    <ul>
                        <li
                            onMouseEnter={() => handleMouseEnter("buy")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="/buy">Buy</a>
                        </li>
                        <li>
                            <a href="/sell">Sell</a>
                        </li>
                        <li>
                            <a href="/agents">Agents</a>
                        </li>
                        <li>
                            <a href="/mortgage-calculator">Mortgage Calculator</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-search">
                    <SearchBar></SearchBar>
                </div>

                <div className="navbar-profile">
                    {isAuthenticated ? (
                        <Link to="/login" onClick={handleLogout}>Logout</Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
