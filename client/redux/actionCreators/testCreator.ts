export const add = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD',
    });
  };
};

export const subtract = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'SUBTRACT',
    });
  };
};

export const reset = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'RESET',
    });
  };
};