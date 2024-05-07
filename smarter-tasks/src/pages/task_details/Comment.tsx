import React, { useState, useEffect } from 'react';
import { fetchComments, sortComments } from '../../context/comment/actions';

const CommentsList = ({ projectId, taskId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedComments = await fetchComments(projectId, taskId);
      const sortedComments = sortComments(fetchedComments);
      setComments(sortedComments);
    };

    loadData();
  }, [projectId, taskId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <h4>{comment.owner}</h4>
          <p>{comment.discription}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;