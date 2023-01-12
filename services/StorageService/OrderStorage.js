import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

export const setOrders = async (orders) => {
  const ordersString = JSON.stringify(orders);
  await AsyncStorage.setItem(LOCAL_STORAGE_KEYS.ORDERS, ordersString);
};

export const getOrders = async () => {
  try {
    const orders = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.ORDERS);
    return JSON.parse(orders) || [];
  } catch (error) {
    return [];
  }
};
