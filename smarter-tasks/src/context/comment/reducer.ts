import { CommentListState, CommentActions, CommentListAvailableAction, 
 // TaskData 
} from "./types";

export const initialState: CommentListState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer = (
  state: CommentListState = initialState,
  action: CommentActions
): CommentListState => {
  switch (action.type) {
    case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload };
    case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false };
    case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload };
    case CommentListAvailableAction.REORDER_COMMENTS:
      return { ...state, comments: action.payload.comments };
    default:
      return state;
  }
};
