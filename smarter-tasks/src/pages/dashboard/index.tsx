
import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const userObj = JSON.parse(userData);
      setUser({ name: userObj.name, email: userObj.email });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;