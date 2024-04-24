import React from 'react';

// Assuming these are the details you want to capture for a new member
interface Member {
  id: string;
  name: string;
  email: string;
}

interface NewMemberProps {
  onClose: () => void;
  onAddMember: (member: Member) => void;
}

const NewMember: React.FC<NewMemberProps> = ({ onClose, onAddMember }) => {
  const [member, setMember] = React.useState<Member>({ id: '', name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMember(member);
    onClose(); // Close the modal or form after adding the member
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          name="id"
          value={member.id}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={member.name}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          value={member.email}
          onChange={handleChange}
          type="email"
        />
      </div>
      <button type="submit">Add Member</button>
      <button type="button" onClick={onClose}>Close</button>
    </form>
  );
};

export default NewMember;
