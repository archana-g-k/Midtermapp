import { ActionTypes } from "../constants/action-types";
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const deleteFromCart = (product) => {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: product,
  };
};
export const getNumberFromCart = (product) => {
  return {
    type: ActionTypes.GET_NUMBER_CART,
    payload: product,
  };
};
