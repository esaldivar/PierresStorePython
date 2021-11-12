import { AnyAction } from "redux";


interface iState {
    isLoggedIn: boolean
}

const initalState:iState = {
    isLoggedIn: false
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