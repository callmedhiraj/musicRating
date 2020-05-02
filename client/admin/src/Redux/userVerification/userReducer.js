import { VERIFICATION_REQUEST, VERIFICATION_SUCCESS, VERIFICATION_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST } from './userType';

const initalState = {
 isLoading: false,
 isLoggedIn: false,
 userData : [],
 message: '',
}


const userReducer = (state= initalState, action ) => {
  switch (action.type) {
   case VERIFICATION_REQUEST: 
    return {
     ...state,
     isLoading: true,
    }

    case VERIFICATION_SUCCESS: 
    return {
     isLoading: false,
     isLoggedIn: true,
     userData: action.payload,
     message: 'verified successfully',
    }
    
    case VERIFICATION_FAILED: 
    return {
     isLoading: false,
     isLoggedIn: false,
     userData: [],
     message: action.payload,
    }
    case LOGIN_REQUEST : 
    return {
      ...state,
      isLoading: true,
    }
    case LOGIN_SUCCESS: 
    return {
      isLoading: false,
      isLoggedIn: true,
      userData: [],
      message: action.payload,
    }
    case LOGIN_FAILED: 
    return {
      isLoggedIn: false,
      isLoading: false,
      userData: [],
      message: action.payload,
    }
   default:
    return {
     ...state,
    }
    
  }
}

export default userReducer;