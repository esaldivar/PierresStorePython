import { AnyAction } from 'redux';
import { layout } from '../../types/storeTypes';

const initalState: layout = {
  currentCategory: '',
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case 'SETCAT': {
      return {
        ...state,
        currentCategory: action.payload,
      };
    }

    default:
      return state;
  }
}
