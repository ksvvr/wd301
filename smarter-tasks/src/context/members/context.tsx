import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { Member } from '../../types';

interface MembersState {
  members: Member[];
  isLoading: boolean;
  error: any;
}

const initialState: MembersState = {
  members: [],
  isLoading: false,
  error: null,
};

const MembersStateContext = createContext<MembersState | undefined>(undefined);
const MembersDispatchContext = createContext<React.Dispatch<any> | undefined>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);