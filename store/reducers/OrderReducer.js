import { ORDER_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  orders: [],
  loading: false,
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_ACTIONS.ADD_ORDER_REQUEST:
      return { ...state, loading: true };
    case ORDER_ACTIONS.ADD_ORDER_SUCCESS:
      console.log("ACTION: ", action);
      return { ...state, loading: false, orders: action.payload };
    case ORDER_ACTIONS.ADD_ORDER_FAILURE:
      return { ...state, loading: false };
    case ORDER_ACTIONS.GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case ORDER_ACTIONS.GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case ORDER_ACTIONS.GET_ORDERS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
