import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

export const setLoggedInUser = async (user) => {
  const userString = JSON.stringify(user);
  await AsyncStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER, userString);
};

export const getLoggedInUser = async () => {
  try {
    const user = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER);
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

export const setUsers = async (users) => {
  const usersString = JSON.stringify(users);
  await AsyncStorage.setItem(LOCAL_STORAGE_KEYS.USERS, usersString);
};

export const getUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.USERS);
    return JSON.parse(users) || [];
  } catch (error) {
    return [];
  }
};
