import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const NewMember = ({ onClose, onAddMember }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('API_ENDPOINT/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      reset(); // Reset form fields
      onClose(); // Close dialog
      onAddMember(); // Refresh members list
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <span>Required</span>}
        <input {...register('email', { required: true })} placeholder="Email" />
        {errors.email && <span>Required</span>}
        <input type="password" {...register('password', { required: true })} placeholder="Password" />
        {errors.password && <span>Required</span>}
        <button type="submit">Add Member</button>
        {submitError && <span>{submitError}</span>}
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NewMember;