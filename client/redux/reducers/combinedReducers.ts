import { combineReducers } from 'redux';
import inventoryReducer from './inventoryReducer';
import pageLayoutReducer from './pageLayoutReducer';

// creates a store of reducers
const reducers = combineReducers({
  inventory: inventoryReducer,
  layout: pageLayoutReducer,
});

export default reducers;
