import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/combinedReducers';

//creates store with reducers and an empty object as an intial state
const store = createStore(reducers, {}, applyMiddleware(thunk));
// const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;