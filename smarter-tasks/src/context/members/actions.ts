import { API_ENDPOINT } from '../../config/constants';
import { Member } from '../../types';

export const FETCH_MEMBERS_BEGIN = 'FETCH_MEMBERS_BEGIN';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_MEMBERS_FAILURE = 'FETCH_MEMBERS_FAILURE';

export const fetchMembers = async (dispatch: any) => {
  dispatch({ type: FETCH_MEMBERS_BEGIN });
  try {
    const response = await fetch(`${API_ENDPOINT}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    const members: Member[] = await response.json();
    dispatch({ type: FETCH_MEMBERS_SUCCESS, payload: members });
  } catch (error) {
    dispatch({ type: FETCH_MEMBERS_FAILURE, payload: error });
  }
};