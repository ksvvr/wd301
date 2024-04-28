import React, { useEffect, useState } from 'react';
import { useMembersState, useMembersDispatch } from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MemberListItems';
import NewMember from './NewMember';

const Members = () => {
  const [showNewMemberForm, setShowNewMemberForm] = useState(false);

  const handleAddMember = (event) => {
    event.preventDefault();
    //const dispatch = useMembersDispatch();
    const newMemberData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    
    dispatch({ type: 'ADD_MEMBER', payload: newMemberData });
  
    setShowNewMemberForm(false);
  };
  const dispatch = useMembersDispatch();
  const { members, isLoading, error } = useMembersState();

  useEffect(() => {
    fetchMembers(dispatch);
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading members!</p>;

  return (
    <div>
      <h1>Members List</h1>
      <button
        id="new-member-btn"
        onClick={() => setShowNewMemberForm(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Member
      </button>
      {showNewMemberForm && (
        <NewMember
          onClose={() => setShowNewMemberForm(false)}
          onAddMember={handleAddMember}
        />
      )}
      {members.map((member) => (
        <MemberListItems key={member.id} member={member} onDelete={() => {}} />
      ))}
    </div>
  );
};

export default Members;