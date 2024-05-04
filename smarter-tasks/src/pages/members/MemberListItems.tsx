// src/pages/members/MemberListItems.tsx
//import React from "react";
import { API_ENDPOINT } from "../../config/constants";
import { fetchMembers } from '../../context/members/actions';
// First, I'll import the useMembersState custom hook to access members state.
import { useMembersDispatch, useMembersState } from "../../context/members/context";
import { Member } from "../../types";

export default function MemberListItems() {
  const dispatchMembers = useMembersDispatch();
  const handleDelete = async (member: Member) => {
    const response = await fetch(`${API_ENDPOINT}/users/${member.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    if (response.ok) {
      //onDelete(member.id);
      fetchMembers(dispatchMembers);
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
      {members.map((member: Member) => (
        <div key={member.id} className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text font-small tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          <button onClick={() => handleDelete(member)}>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 fill-red-200 hover:fill-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

          </button>
        </div>
      ))}
    </>
  );
}

// onClick={handleDelete(member)}