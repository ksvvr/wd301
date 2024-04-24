import React, { useEffect, useState } from 'react';
import MemberListItems from './MemberListItems';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('API_ENDPOINT/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMembers(data.users);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      {members.map(member => (
        <MemberListItems key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;