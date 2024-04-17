import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const userObj = JSON.parse(userData);
      setUser({ name: userObj.name, email: userObj.email });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button id="logout-link" onClick={handleLogout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;