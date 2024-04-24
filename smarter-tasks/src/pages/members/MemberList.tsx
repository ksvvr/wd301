import React from 'react';
import MemberListItems from './MemberListItems'; // Adjust the import path as necessary

interface Member {
  id: string;
  name: string;
  email: string;
}

const members: Member[] = []; // Initialize this with your actual members data

const MemberList: React.FC = () => {
  const handleDeleteMember = (id: string) => {
    // Logic to delete the member from the list, e.g., filter out the member by id
    console.log(`Delete member with id: ${id}`);
  };

  return (
    <div>
      {members.map((member) => (
        <MemberListItems key={member.id} member={member} onDelete={handleDeleteMember} />
      ))}
    </div>
  );
};

export default MemberList;