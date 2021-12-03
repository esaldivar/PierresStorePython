export const search = (input: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'SEARCH',
      payload: input,
    });
  };
};

export const searchView = (input: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'SEARCHVIEW',
      payload: input,
    });
  };
};
