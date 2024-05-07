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
  task: CommentDetailsPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS });
    refreshComments(dispatch, projectID, task.id);
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
          Authorization: `Bearer ${token}`,
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

// export const deleteComment = async (
//   dispatch: CommentsDispatch,
//   projectID: string,
//   task: CommentDetails
// ) => {
//   const token = localStorage.getItem("authToken") ?? "";
//   try {
//     dispatch({ type: CommentListAvailableAction.DELETE_COMMENTS_REQUEST });
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(task),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to delete comment");
//     }
//     dispatch({ type: CommentListAvailableAction.DELETE_COMMENTS_SUCCESS });
//     refreshComments(dispatch, projectID);
//   } catch (error) {
//     console.error("Operation failed:", error);
//     dispatch({
//       type: CommentListAvailableAction.DELETE_COMMENTS_FAILURE,
//       payload: "Unable to delete comment",
//     });
//   }
// };

// export const updateComment = async (
//   dispatch: CommentsDispatch,
//   projectID: string,
//   task: CommentDetails
// ) => {
//   const token = localStorage.getItem("authToken") ?? "";
//   try {
//     // Display loading status
//     dispatch({ type: CommentListAvailableAction.UPDATE_COMMENT_REQUEST });
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(task),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update task");
//     }
//     // Display success and refresh the tasks
//     dispatch({ type: CommentListAvailableAction.UPDATE_COMMENT_SUCCESS });
//     refreshComments(dispatch, projectID);
//   } catch (error) {
//     console.error("Operation failed:", error);
//     // Display error status
//     dispatch({
//       type: CommentListAvailableAction.UPDATE_COMMENT_FAILURE,
//       payload: "Unable to update task",
//     });
//   }
// };