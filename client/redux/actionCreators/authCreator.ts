export const logIn = () => {
    return (dispatch:any) => {
        dispatch({
            type: 'LOGIN'
        });
    };
};

export const logOut = () => {
    return (dispatch:any) => {
        dispatch({
            type: 'LOGOUT'
        });
    };
};