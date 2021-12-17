import { AnyAction } from 'redux';
import { layout } from '../../types/storeTypes';

const initalState: layout = {
  showCats: false,
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case 'SHOWCATS': {
      return {
        ...state,
        showCats: action.payload,
      };
    }

    default:
      return state;
  }
}
