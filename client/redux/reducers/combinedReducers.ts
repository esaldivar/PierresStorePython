import { combineReducers } from 'redux';
import inventoryReducer from './inventoryReducer';

// creates a store of reducers
const reducers = combineReducers({
  inventory: inventoryReducer,
});

export default reducers;
