import { AnyAction } from "redux";



const initalState = {
    isLoggedIn: false,
    logger: 'eric'
}

export default function reducer (state = initalState, action:AnyAction) {
    switch (action.type) {
        case 'LOGIN' : {
            return {
                ...state,
                isLoggedIn: true
            };
        };
        case 'LOGOUT' : {
            return {
                ...state,
                isLoggedIn: false
            };
        };
        default:
            return state;
    };
};