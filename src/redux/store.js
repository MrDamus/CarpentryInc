import {createStore} from 'redux';
import profileReducer from './reducers/index';

const store = createStore(profileReducer);
export default store;
