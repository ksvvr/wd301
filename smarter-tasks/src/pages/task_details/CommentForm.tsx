//import React from 'react';
import { useForm } from 'react-hook-form';
import { API_ENDPOINT } from '../../config/constants';

const AddCommentForm = ({ projectId, taskId, onCommentAdded }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const token = localStorage.getItem('authToken') ?? '';
        const commentData = {
            //description: "User's Name", // Replace with logic to retrieve user's name
            //timestamp: new Date().toISOString(),
            description: data.description,
        };

        try {
            const response = await fetch(`${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(commentData),
            });

            if (!response.ok) {
                throw new Error('Failed to add comment');
            }

            // Callback to refresh comments in the parent component
            onCommentAdded();
            reset(); // Reset form fields
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                id="commentBox"
                className='border-solid'
                {...register("description", { required: true })}
                placeholder="Enter your comment here..."
                type="text"
            />
            <button id="addCommentBtn" type="submit" className='bg-lime-400 mx-3'>
                Add Comment
            </button>
        </form>
    );
};

export default AddCommentForm;