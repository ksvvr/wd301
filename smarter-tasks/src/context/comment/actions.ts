// Import required type annotations
//import { CommentDetails } from "./types";
import { API_ENDPOINT } from "../../config/constants";
import {
  TaskData,
  CommentDetailsPayload,
  CommentListAvailableAction,
  CommentsDispatch,
} from "./types";

// The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly
export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  comment: CommentDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS });
    refreshComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

export const reorderComments = (dispatch: CommentsDispatch, newState: TaskData)  => {
  dispatch({type: CommentListAvailableAction.REORDER_COMMENTS, payload: newState})
}

export const refreshComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    // extract the response body as JSON data
    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
    console.dir(data);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};

export const fetchComments = async (projectId: number, taskId: number) => {
  const token = localStorage.getItem('authToken') ?? '';
  try {
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export const fetchUserName = async (id: string): Promise<string | null> => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const res = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch user name');
    }

    const users = await res.json();
    const user = users.find((user: { id: number }) => user.id.toString() === id);
    
    if (user) {
      return user.name;
    } else {
      console.log(`User with ID ${id} not found`);
      return null;
    }
  } catch (error) {
    console.error("Failed to get name of user:", error);
    return null;
  }
};
