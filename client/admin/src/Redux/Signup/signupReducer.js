import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILED } from './signupTypes';

const intialState = {
 isLoading: false,
 message: '',
 status: 0,
}

const signupReducer = (state= intialState, action) => {
 switch(action.type){
  case SIGNUP_REQUEST:
   return {
    ...state,
    isLoading: true,
   }
   case SIGNUP_SUCCESS: 
   return {
    isLoading: false,
    message: action.payload,
   }
   case SIGNUP_FAILED: 
   return {
    isLoading: false,
    message: action.payload,
   }
   default: 
   return{
    ...state,
   }
 }

}

export default signupReducer;