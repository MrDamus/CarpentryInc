import {combineReducers} from 'redux';
import profileReducer from './profile';
import shopReducer from './shop';
import warehouseReducer from './warehouse';

const reducers = combineReducers({
  profile: profileReducer,
  shop: shopReducer,
  warehouse: warehouseReducer,
});

export default reducers;
