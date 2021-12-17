import { AppDispatch } from '../../types/reduxTypes';

export const toggleCats = (input: boolean) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: 'SHOWCATS',
      payload: input,
    });
  };
};
