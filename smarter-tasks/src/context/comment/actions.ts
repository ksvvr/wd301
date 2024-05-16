import { API_ENDPOINT } from "../../config/constants";
import {
  CommentDetailsPayload,
  CommentListAvailableAction,
  CommentsDispatch,
  //TaskData,
  CommentDetails,
} from "./types";

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

    // Automatically refresh comments after adding a new comment
    refreshComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

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

    const data: CommentDetails[] = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};
