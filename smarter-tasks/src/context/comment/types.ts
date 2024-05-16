export interface CommentListState {
    taskData: TaskData;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
    
    // Actions that are available
    export enum CommentListAvailableAction {
      FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
      FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
      FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  
      CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
      CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
      CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
    
      REORDER_COMMENTS = "REORDER_COMMENTS",
    }
    
    export type CommentActions =
      | { type: CommentListAvailableAction.REORDER_COMMENTS; payload: TaskData }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: TaskData }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
      | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
      | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
      | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }
      
    // A type to hold dispatch actions in a context.
    export type CommentsDispatch = React.Dispatch<CommentActions>;
    
    export type CommentDetailsPayload = Omit<CommentDetails, "id">;
    
    export type CommentDetails = {
      id: number;
      description: string;
      owner: number;
    };
    
    export type Comments = {
      [k: string]: CommentDetails;
    };
  
    export type TaskData = {
      comments: Comments;
    };
    
    