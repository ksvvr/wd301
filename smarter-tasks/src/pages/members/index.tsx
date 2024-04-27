import React, { useEffect } from 'react';
import { useMembersState, useMembersDispatch } from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MemberListItems';

const Members = () => {
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
      {members.map((member) => (
        <MemberListItems key={member.id} member={member} onDelete={() => {}} />
      ))}
    </div>
  );
};

export default Members;