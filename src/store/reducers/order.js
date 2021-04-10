import * as actionTypes from "../actions/actionTypes.js";
import { updateObject } from "../../shared/utility.js";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false,
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const purchaseBurgerSucess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  });
};

const purchaseBurgerFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchOrdersSucess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchOrdersFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);

    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);

    case actionTypes.PURCHASE_BURGER_SUCESS:
      return purchaseBurgerSucess(state, action);

    case actionTypes.PURCHASE_BURGER_FAILED:
      return purchaseBurgerFailed(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCESS:
      return fetchOrdersSucess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
