import {combineReducers} from 'redux';
import profileReducer from './profile';
import shopReducer from './shop';
import warehouseReducer from './warehouse';
import workshopReducer from './production';

const reducers = combineReducers({
  profile: profileReducer,
  shop: shopReducer,
  warehouse: warehouseReducer,
  production: workshopReducer,
});

export default reducers;
