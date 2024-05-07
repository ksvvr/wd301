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
    
      DELETE_COMMENTS_REQUEST = "DELETE_COMMENTS_REQUEST",
      DELETE_COMMENTS_SUCCESS = "DELETE_COMMENTS_SUCCESS",
      DELETE_COMMENTS_FAILURE = "DELETE_COMMENTS_FAILURE",
    
      CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
      CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
      CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
    
      // Add action types
      UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST",
      UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS",
      UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE",
    
      REORDER_COMMENTS = "REORDER_COMMENTS",
    }
    
    export type CommentActions =
      | { type: CommentListAvailableAction.REORDER_COMMENTS; payload: TaskData }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS; payload: TaskData }
      | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
      | { type: CommentListAvailableAction.DELETE_COMMENTS_REQUEST }
      | { type: CommentListAvailableAction.DELETE_COMMENTS_SUCCESS }
      | { type: CommentListAvailableAction.DELETE_COMMENTS_FAILURE; payload: string }
      | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
      | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
      | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }
      | { type: CommentListAvailableAction.UPDATE_COMMENT_REQUEST }
      | { type: CommentListAvailableAction.UPDATE_COMMENT_SUCCESS }
      | { type: CommentListAvailableAction.UPDATE_COMMENT_FAILURE; payload: string };
      
    // A type to hold dispatch actions in a context.
    export type CommentsDispatch = React.Dispatch<CommentActions>;
    
    export type CommentDetailsPayload = Omit<CommentDetails, "assignee" | "state">;
  
    export type AvailableColumns = "pending" | "in_progress" | "done";
    
    export type ColumnData = {
      id: string;
      title: string;
      commentIDs: string[];
    };
  
    // export type Columns = {
    //   [k in AvailableColumns]: ColumnData;
    // };
    
    export type CommentDetails = {
      id: number;
      task_id: number;
      //title: string;
      description: string;
      owner: number;
      //dueDate: string;
      //state: AvailableColumns;
      //assignee?: number,
      //assignedUserName?: string
    };
    
    export type Comments = {
      [k: string]: CommentDetails;
    };
  
    export type TaskData = {
      comments: Comments;
    };
    
    