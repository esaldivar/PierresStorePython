import { AnyAction } from 'redux';
import { inventory } from '../../types/storeTypes';

const initalState: inventory = {
  searchInput: '',
  singleResult: {
    productName: '',
    imageUrl: '',
    price: '',
    information: '',
    category: [],
    quantity: '',
  },
  store: [],
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case 'SEARCH': {
      return {
        ...state,
        searchInput: action.payload,
      };
    }
    case 'SEARCHVIEW': {
      return {
        ...state,
        singleResult: action.payload,
      };
    }
    case 'INVENTORY': {
      return {
        ...state,
        store: action.payload,
      };
    }
    default:
      return state;
  }
}
