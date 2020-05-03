import { combineReducers  } from 'redux';

import authReducer from './Auth/authReducers'

const rootReducer = combineReducers({
 auth: authReducer,
});


export default rootReducer;