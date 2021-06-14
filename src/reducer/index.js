import {combineReducers} from 'redux';
import {customer} from './customer';
import {user} from './user';

export default combineReducers({
  user,
  customer,
});
