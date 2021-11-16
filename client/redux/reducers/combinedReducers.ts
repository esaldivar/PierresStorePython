import { combineReducers } from 'redux';
import reduxTestReducer from './reduxTestReducer';

// creates a store of reducers
const reducers = combineReducers({
    reduxTest: reduxTestReducer,
});


export default reducers;