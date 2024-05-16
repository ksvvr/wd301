import { useState, useEffect } from 'react';
//import { useForm, SubmitHandler } from "react-hook-form"
import { fetchComments } from '../../context/comment/actions';
import { format } from 'date-fns';


interface Commentt {
  createdAt: string | number | Date;
  User: {
    name: string
  }
  id: number
  owner: string
  description: string
}

interface CommentsListProps {
  projectId: number;
  taskId: number;
}

const CommentsList: React.FC<CommentsListProps> = ({ projectId, taskId }) => {
//const CommentsList = ({ projectId, taskId }) => {
  const [comments, setComments] = useState<Commentt[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedComments = await fetchComments(projectId, taskId);
      //const owners = await fetch()
      //const sortedComments = sortComments(fetchedComments);
      setComments(fetchedComments);
    };

    loadData();
  }, [projectId, taskId]);
  
  if (comments.length < 1){
    return(
      <>
      <div>
        <h4>No Comments Yet</h4>
      </div>
      </>
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