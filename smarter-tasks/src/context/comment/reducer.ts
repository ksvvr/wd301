import { Reducer } from "react";

import taskData from "./initialData.ts";
import { CommentListState } from "./types";

import { CommentListAvailableAction, CommentActions } from "./types";
// Define the initial state
export const initialState: CommentListState = {
  taskData: taskData,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentListState, CommentActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, taskData: action.payload };
    case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case CommentListAvailableAction.DELETE_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.DELETE_COMMENTS_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.DELETE_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    // Toggle the loading state based on action
    case CommentListAvailableAction.UPDATE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case CommentListAvailableAction.UPDATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentListAvailableAction.REORDER_COMMENTS:
      return { ...state, isLoading: false, taskData: action.payload };
    default:
      return state;
  }
};
