export const search = (input: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'SEARCH',
      payload: input,
    });
  };
};
