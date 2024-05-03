interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
}
// Now, I'll rename the interface in the `MemberList` component from `State`
// to `MembersState`. And I'll also export the interface.

export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `MembersActions`
// for all possible combimations of action objects.

export type MembersActions =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBER_SUCCESS"; payload: Member };

export const initialState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: MembersState = initialState,
  action: MembersActions
): MembersState => {
  switch (action.type) {
    case "ADD_MEMBER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        members: [...state.members, action.payload],
        errorMessage: "",
      };
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case "FETCH_MEMBERS_FAILURE":
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
