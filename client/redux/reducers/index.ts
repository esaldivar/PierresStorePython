import { combineReducers } from 'redux';
import authReducer from './reduxTestReducer';

// creates a store of reducers
const reducers = combineReducers({
    auth: authReducer,
});


export default reducers;