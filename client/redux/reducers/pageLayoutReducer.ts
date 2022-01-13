import { AnyAction } from 'redux';
import { layout } from '../../types/storeTypes';

const initalState: layout = {
  currentCategory: '',
  heartedFavs: [],
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case 'SETCAT': {
      return {
        ...state,
        currentCategory: action.payload,
      };
    }

    case 'CHANGEFAVS': {
      return {
        ...state,
        heartedFavs: action.payload,
      };
    }

    default:
      return state;
  }
}
