// Imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/loginApi';

// Component
import "./AdminHome.css";

// Interface

const Admin: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <h1>Hi, Admin</h1>
            <div>
                <h2>Account Management</h2>
                <button onClick={() => handleClick("/admin/create-user")}>Create User</button>
                <button onClick={() => handleClick("/admin/view-users")}>View Users</button>
            </div>

            <div>
                <h2>Listing Management</h2>
                <button onClick={() => handleClick("/admin/create-user")}>View Listings</button>
            </div>

            <div>
                <h2>System Management</h2>
            </div>
            
        </>
    );
};

export default Admin;