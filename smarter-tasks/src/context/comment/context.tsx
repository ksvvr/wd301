// context.tsx
import React, { createContext, useContext, useReducer } from "react";
import { commentReducer, initialState } from "./reducer";
import { CommentListState, CommentsDispatch } from "./types";

const CommentsStateContext = createContext<CommentListState>(initialState);
const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children} 
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispatch` out of the context.
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
