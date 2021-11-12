import { combineReducers } from 'redux';
import authReducer from './authReducer';

// creates a store of reducers
const reducers = combineReducers({
    auth: authReducer,
});


export default reducers;