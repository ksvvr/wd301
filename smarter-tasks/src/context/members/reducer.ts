import { Member } from '../../types';
import { FETCH_MEMBERS_BEGIN, FETCH_MEMBERS_SUCCESS, FETCH_MEMBERS_FAILURE, ADD_MEMBER } from './actions';

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

export const reducer = (state: MembersState = initialState, action: any): MembersState => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload], // Add the new member to the existing members array
    };
    case FETCH_MEMBERS_BEGIN:
      return { ...state, isLoading: true, error: null };
    case FETCH_MEMBERS_SUCCESS:
      return { ...state, isLoading: false, members: action.payload };
    case FETCH_MEMBERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};