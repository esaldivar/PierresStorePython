import { AnyAction } from "redux";


interface reduxTest {
    count: number
}

const initalState:reduxTest = {
    count: 0  
}

export default function reducer (state = initalState, action:AnyAction) {
    switch (action.type) {
        case 'ADD' : {
            return {
                ...state,
                count: state.count + 1
            };
        };

        case 'SUBTRACT' : {
            return {
                ...state,
                count: state.count -1
            }
        };

        case 'RESET' : {
            return {
                ...state,
                count: 0
            };
        };
        default:
            return state;
    };
};