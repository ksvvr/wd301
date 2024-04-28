import React from 'react';
import { API_ENDPOINT } from '../../config/constants';

interface Member {
  id: string;
  name: string;
  email: string;
}

interface MemberListItemProps {
  member: Member;
  onDelete: (id: string) => void;
}

const MemberListItems: React.FC<MemberListItemProps> = ({ member, onDelete }) => {
  const handleDelete = async () => {
    const response = await fetch(`${API_ENDPOINT}/users/${member.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    if (response.ok) {
      onDelete(member.id);
    }
  };

  return (
    <div className='.member'>
      <p>Name: {member.name}</p>
      <p>Email: {member.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MemberListItems;