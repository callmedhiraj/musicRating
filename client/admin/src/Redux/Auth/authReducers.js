import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  VERIFICATION_REQUEST,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAILED,
  LOGOUT,
} from "./authType";
const initialState = {
  verifying: false,
  isLoading: false,
  isLoggedIn: false,
  userData: [],
  message: "",
  fakeToken: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoading: true,
        
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        message: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case VERIFICATION_REQUEST:
      return {
        verifying: true,
      };

    case VERIFICATION_SUCCESS:
      return {
        ...state,
        verifying: false,
        isLoggedIn: true,
        userData: action.payload,
        message: "verified successfully",
      };

    case VERIFICATION_FAILED:
      return {
        isLoggedIn: false,
        verifying: false,
        message: action.payload,
        fakeToken: true,
      };
      case LOGOUT: {
        return {
          ...state,
          isLoggedIn: false,
        }
      }
    default:
      return {
        ...state,
      };
  }
};
export default authReducer;
