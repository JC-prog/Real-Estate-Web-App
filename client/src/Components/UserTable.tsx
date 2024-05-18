import React from 'react';
import "./UserTable.css";

// Interface
interface Users {
    userId: string;
    userName: string;
    userEmail: string;
    userRole: string;
    userState: string;
}

interface UserTableProps {
    data: Users[];
}

const UserTable: React.FC<UserTableProps> = ({ data = [] }) => {
    if (data.length === 0) {
        return <p>No users available.</p>;
    }

    console.log(data);

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Role</th>
                        <th>User State</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.userRole}</td>
                            <td>{user.userState}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default UserTable;
