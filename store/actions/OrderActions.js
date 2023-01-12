import { ORDER_ACTIONS } from "../../constants/ActionConstants";
import { ERROR_MESSAGES } from "../../constants/StringConstants";
import { actionWrapper } from "..";
import {
  setOrders,
  getOrders,
} from "../../services/StorageService/OrderStorage";

export const addOrder = (order) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(ORDER_ACTIONS.ADD_ORDER_REQUEST));
      const orders = await getOrders();
      await setOrders([...orders, order]);
      dispatch(
        actionWrapper(ORDER_ACTIONS.ADD_ORDER_SUCCESS, [...orders, order])
      );
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(ORDER_ACTIONS.ADD_ORDER_FAILURE, error));
      throw error;
    }
  };
};

export const loadOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(ORDER_ACTIONS.GET_ORDERS_REQUEST));
      const orders = await getOrders();
      dispatch(actionWrapper(ORDER_ACTIONS.GET_ORDERS_SUCCESS, orders));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(ORDER_ACTIONS.GET_ORDERS_FAILURE, error));
    }
  };
};
