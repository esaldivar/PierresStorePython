import { AnyAction } from 'redux';

interface inventory {
  searchInput: string;
  singleResult: {
    productName: string;
    imageUrl: string;
    price: string;
    information: string;
    season?: string[];
    category: string[];
    quantity: string;
  };
}

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
    default:
      return state;
  }
}
