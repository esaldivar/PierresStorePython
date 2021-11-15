export const add = () => {
    return (dispatch:any) => {
        dispatch({
            type: 'ADD'
        });
    };
};

export const reset = () => {
    return (dispatch:any) => {
        dispatch({
            type: 'RESET'
        });
    };
};