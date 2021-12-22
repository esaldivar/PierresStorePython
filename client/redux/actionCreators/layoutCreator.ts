import { AppDispatch } from '../../types/reduxTypes';

export const setCategory = (input: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'SETCAT',
      payload: input,
    });
  };
};

export const changeFavs = (input: string[]) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'CHANGEFAVS',
      payload: input,
    });
  };
};
