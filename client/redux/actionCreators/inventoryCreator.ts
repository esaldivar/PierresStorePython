import { Stores } from '../../types/storeTypes';
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

export const getInventory = (input: string) => {
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
