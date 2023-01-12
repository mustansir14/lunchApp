import { USER_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  loggedInUser: null,
  users: [],
  loading: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.CREATE_USER_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.CREATE_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case USER_ACTIONS.CREATE_USER_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedInUser: action.payload };
    case USER_ACTIONS.LOGIN_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.LOGOUT_SUCCESS:
      return { ...state, loading: false, loggedInUser: null };
    case USER_ACTIONS.LOGOUT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
