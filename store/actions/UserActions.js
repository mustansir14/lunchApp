import { USER_ACTIONS } from "../../constants/ActionConstants";
import { ERROR_MESSAGES } from "../../constants/StringConstants";
import { actionWrapper } from "..";
import {
  setUsers,
  getUsers,
  setLoggedInUser,
  getLoggedInUser,
} from "../../services/StorageService/UserStorage";

export const createUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.CREATE_USER_REQUEST));
      const users = await getUsers();
      console.log("yes");
      if (users.find((x) => x.email === user.email)) {
        dispatch(
          actionWrapper(
            USER_ACTIONS.CREATE_USER_FAILURE,
            ERROR_MESSAGES.USER_ALREADY_EXISTS
          )
        );
        throw ERROR_MESSAGES.USER_ALREADY_EXISTS;
      }
      await setUsers([...users, user]);
      dispatch(actionWrapper(USER_ACTIONS.CREATE_USER_SUCCESS), [
        ...users,
        user,
      ]);
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.CREATE_USER_FAILURE, error));
      throw error;
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_REQUEST));
      const users = await getUsers();
      const user = users.find((x) => x.email === credentials.email);
      if (user) {
        if (user.password === credentials.password) {
          await setLoggedInUser(user);
          dispatch(actionWrapper(USER_ACTIONS.LOGIN_SUCCESS, user));
          return;
        }
      }
      dispatch(
        actionWrapper(
          USER_ACTIONS.LOGIN_FAILURE,
          ERROR_MESSAGES.INVALID_EMAIL_OR_PASSWORD
        )
      );
      throw ERROR_MESSAGES.INVALID_EMAIL_OR_PASSWORD;
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_FAILURE, error));
      throw error;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_REQUEST));
      await setLoggedInUser(null);
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_FAILURE, error));
      throw error;
    }
  };
};

export const userAutoLoggedIn = () => {
  return async (dispatch) => {
    const user = await getLoggedInUser();
    if (user === null) {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_FAILURE));
    } else {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_SUCCESS, user));
    }
  };
};
