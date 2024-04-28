// src/pages/members/MemberListItems.tsx
//import React from "react";
import { API_ENDPOINT } from "../../config/constants";

// First, I'll import the useMembersState custom hook to access members state.
import { useMembersState } from "../../context/members/context";
import { Member } from "../../types";

export default function MemberListItems() {
  const handleDelete = async (member: Member) => {
    const response = await fetch(`${API_ENDPOINT}/users/${member.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    if (response.ok) {
      //onDelete(member.id);
      console.log("Deleted Member")
    }
  };

  // I'll define a new constant called `state`, to call the useMembersState() hook, 
  // and get access to members state.
  const state: any = useMembersState();

  // Next, I'll destructure the state object to gain access to members, 
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state
  console.log(members);

  // If `isLoading` is true, and there are no members, in that case, 
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the members object to show the 
  // individual members card.
  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text font-small tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          <button onClick={() => handleDelete(member)}>Delete</button>
        </div>
      ))}        
    </>
  );
}

// onClick={handleDelete(member)}