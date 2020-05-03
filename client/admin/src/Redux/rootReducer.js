import { combineReducers  } from 'redux';

import authReducer from './Auth/authReducers'
import signupReducer from './Signup/signupReducer';

const rootReducer = combineReducers({
 auth: authReducer,
 signup: signupReducer,
});


export default rootReducer;