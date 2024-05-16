// Comment.tsx
import { useEffect } from 'react';
import { useCommentsState, useCommentsDispatch } from '../../context/comment/context';
import { refreshComments } from '../../context/comment/actions';
import { format } from 'date-fns';

interface CommentsListProps {
  projectId: string;
  taskId: string;
}

const CommentsList: React.FC<CommentsListProps> = ({ projectId, taskId }) => {
  const { comments, isLoading, isError, errorMessage } = useCommentsState();
  const dispatch = useCommentsDispatch();

  useEffect(() => {
    refreshComments(dispatch, projectId, taskId);
  }, [dispatch, projectId, taskId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  if (comments.length < 1) {
    return (
      <div>
        <h4>No Comments Yet</h4>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="m-2 bg-lime-100">
            <p><strong>{comment.User.name}</strong> - {format(new Date(comment.createdAt), 'PPpp')}</p>
            <p className='comment'>{comment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
