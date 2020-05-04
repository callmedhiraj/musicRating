import { combineReducers  } from 'redux';

import authReducer from './Auth/authReducers'
import signupReducer from './Signup/signupReducer';
import snackReducer from './globalSnackBar/snackReducer';

const rootReducer = combineReducers({
 auth: authReducer,
 signup: signupReducer,
 snack: snackReducer,
});


export default rootReducer;