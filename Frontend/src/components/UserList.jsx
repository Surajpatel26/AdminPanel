import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css'; // Import custom CSS

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users from the backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect to fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-center">Loading users...</p>;
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">User List</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
