import {createStore} from 'redux';
import profileReducer from './reducers/profile';

const store = createStore(profileReducer);
export default store;
