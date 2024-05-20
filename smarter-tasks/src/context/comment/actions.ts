// src/context/comment/actions.ts
import { CommentsDispatch, CommentDetailsPayload, CommentListAvailableAction } from "./types";
import { API_ENDPOINT } from "../../config/constants";

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
    await fetchComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

export const fetchComments = async (
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
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
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
