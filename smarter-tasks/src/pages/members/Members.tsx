import React, { useState, useEffect } from 'react';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('API_ENDPOINT/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch members');
      }
      const data = await response.json();
      setMembers(data);
    };

    fetchMembers().catch(error => {
      console.error('Error fetching members:', error);
    });
  }, []);

  return (
    <div>
      <h2>Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            Name: {member.name}, Email: {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
