import { combineReducers  } from 'redux';

import userReducer from './userVerification/userReducer';

const rootReducer = combineReducers({
 user: userReducer,
});


export default rootReducer;