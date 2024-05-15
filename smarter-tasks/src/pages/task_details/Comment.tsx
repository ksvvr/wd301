import { useState, useEffect } from 'react';
//import { useForm, SubmitHandler } from "react-hook-form"
import { fetchComments } from '../../context/comment/actions';

interface Commentt {
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
      //const sortedComments = sortComments(fetchedComments);
      setComments(fetchedComments);
    };

    loadData();
  }, [projectId, taskId]);
  
  if (comments.length < 1){
    return(
      <>
      <div>
        <h4>No Comments</h4>
      </div>
      </>
    );
  }

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;