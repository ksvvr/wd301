// src/context/comment/reducer.ts
import { CommentListState, CommentActions, CommentListAvailableAction } from "./types";

export const initialState: CommentListState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer = (
  state: CommentListState,
  action: CommentActions
): CommentListState => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: "",
      };
    case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false,
        isError: false,
        errorMessage: "",
      };
    case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
