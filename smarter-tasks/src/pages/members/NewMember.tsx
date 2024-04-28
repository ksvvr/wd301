import React from 'react';
import { API_ENDPOINT } from '../../config/constants';

// Assuming these are the details you want to capture for a new member
interface Member {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface NewMemberProps {
  onClose: () => void;
  onAddMember: (member: Member) => void;
}

const NewMember: React.FC<NewMemberProps> = ({ onClose, onAddMember }) => {
  const [member, setMember] = React.useState<Member>({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
      body: JSON.stringify(member),
    });
    if (response.ok) {
      const newMember = await response.json();
      onAddMember(newMember);
      onClose();
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleAddMember(event);
  // };
  

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>ID:</label>
        <input
          name="id"
          value={member.id}
          onChange={handleChange}
          type="text"
        />
      </div> */}
      <div>
        <label>Name:</label>
        <input
          id='name'
          name="name"
          value={member.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          id='email'
          name="email"
          value={member.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      <div>
  <label>Password:</label>
  <input
    id='password'
    name="password"
    value={member.password} // This assumes you've added password to the member state
    onChange={handleChange}
    type="password"
  />
  </div>
      <button type="submit" id="create-member-btn">Add Member</button>
      <button className='mt-5' type="button" onClick={onClose}>Close</button>
    </form>
  );
};

export default NewMember;
