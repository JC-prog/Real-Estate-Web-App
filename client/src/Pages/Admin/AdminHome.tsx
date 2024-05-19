import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminHome.css"

const Admin: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="admin-dashboard-container">
            <h1>Hi, Admin</h1>
            <div className="section">
                <h2>Account Management</h2>
                <div className="button-container">
                    <button className="admin-btn" onClick={() => handleClick("/admin/create-user")}>Create User</button>
                    <button className="admin-btn" onClick={() => handleClick("/admin/view-users")}>View Users</button>
                </div>
            </div>

            <div className="section">
                <h2>Listing Management</h2>
                <div className="button-container">
                    <button className="admin-btn" onClick={() => handleClick("/admin/view-listings")}>View Listings</button>
                </div>
            </div>

            <div className="section">
                <h2>Platform Management</h2>
                <div className="button-container">
                    <button className="admin-btn">Platform Feedback Management</button>
                    <button className="admin-btn">Agent Feedback Management</button>
                    <button className="admin-btn">Listing Feedback Management</button>
                </div>
            </div>

            <div className="section">
                <h2>System Management</h2>
                <div className="button-container">
                    <button className="admin-btn">System Activity Log</button>
                    <button className="admin-btn">User Activity Log</button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
