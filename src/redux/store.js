import {createStore, applyMiddleware} from 'redux';
import profileReducer from './reducers/index';
import middleware from './middleware';

const store = createStore(profileReducer, applyMiddleware(middleware));
export default store;
