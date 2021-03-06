import { Stores, productInCart } from '../../types/storeTypes';
import { AppDispatch } from '../../types/reduxTypes';

export const search = (input: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'SEARCH',
      payload: input,
    });
  };
};

export const searchView = (input: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'SEARCHVIEW',
      payload: input,
    });
  };
};

export const getInventory = (input: Stores) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'INVENTORY',
      payload: input,
    });
  };
};

export const sortInventory = (input: Stores) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'SORTSTORE',
      payload: input,
    });
  };
};

export const setProduct = (input: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'PRODUCTVIEW',
      payload: input,
    });
  };
};

export const setFavorites = (input: Stores) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'FAVORITES',
      payload: input,
    });
  };
};

export const addToCart = (input: productInCart) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'ADDTOCART',
      payload: input,
    });
  };
};

export const updateTotal = (input: number) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'UPDATETOTAL',
      payload: input,
    });
  };
};
