import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCommentsDispatch } from '../../context/comment/context';
import { addComment } from '../../context/comment/actions';
import { CommentDetailsPayload } from '../../context/comment/types';

interface AddCommentFormProps {
  projectId: number;
  taskId: number;
  onCommentAdded: () => void;
}

interface FormData {
  description: string;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ projectId, taskId, onCommentAdded }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useCommentsDispatch();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const commentData = {
      description: data.description,
      owner: Number(localStorage.getItem('userId')), // Ensure owner is correctly set
    };

    try {
      addComment(dispatch, projectId.toString(), taskId.toString(), commentData as CommentDetailsPayload);
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
        required
        className="border-solid border-black border-2"
        {...register("description", { required: true })}
        placeholder="Enter your comment here..."
        type="text"
      />
      <button id="addCommentBtn" type="submit" className="bg-lime-400 mx-3">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
