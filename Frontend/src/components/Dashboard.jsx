import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS for Dashboard

const Dashboard = () => {
  const [notificationCount, setNotificationCount] = useState(3); // Example notification count
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notification dropdown

  const notifications = [
    'New ticket request from User 1',
    'New comment on your question',
    'User 2 has completed their profile',
  ]; // Example notifications

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications); // Toggle notification dropdown
  };

  const handleNotificationReview = () => {
    alert('Reviewing Notifications');
    setNotificationCount(0); // Resetting notification count for demonstration purposes
    setShowNotifications(false); // Close the dropdown after reviewing
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        
        <div className="sidebar-buttons">
          <Link to="/questions">
            <button className="sidebar-button">Questions</button>
          </Link>
          <Link to="/users">
            <button className="sidebar-button">Total Users</button>
          </Link>
        </div>
      </aside>
      <div className="main-content">
        <header className="navbar">
          <h1>Admin Panel</h1>
        </header>
        {/* Content starts here */}
        <section className="customer-section">
          {/* Other content will be added here */}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
