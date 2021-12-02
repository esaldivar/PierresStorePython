import { AnyAction } from 'redux';

interface inventory {
  searchInput: string;
}

const initalState: inventory = {
  searchInput: '',
};

export default function reducer(state = initalState, action: AnyAction) {
  switch (action.type) {
    case 'SEARCH': {
      return {
        ...state,
        searchInput: action.payload,
      };
    }
    default:
      return state;
  }
}
