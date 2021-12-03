import { AnyAction } from 'redux';

interface inventory {
  searchInput: string;
  searchViewPage: string;
}

const initalState: inventory = {
  searchInput: '',
  searchViewPage: '',
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
        searchViewPage: action.payload,
      };
    }
    default:
      return state;
  }
}
