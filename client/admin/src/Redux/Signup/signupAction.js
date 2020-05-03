import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILED } from './signupTypes';

import { API } from '../../API_GLOBAL';

import Axios from 'axios';

export const signupRequest = () => {
  return {
   type: SIGNUP_REQUEST,
  };
}

export const signupSucccess = (data) => {
 return {
  type: SIGNUP_SUCCESS,
  payload: data,
 }
}

export const signupFailed = (error) => {
 return {
  type: SIGNUP_FAILED,
  payload: error,
 }
}

export const setRequest = (data) => {
  return (dispatch) => {
    dispatch(signupRequest());
    Axios.post(`${Api}/admin/signup`,data)
    .then(res => {
      dispatch(signupSucccess(res.data.message));
    }).catch(err => {
      if (err && err.response && err.response.data.message) {
        dispatch(signupFailed(err.response.data.message));
      }
      if (err && !err.response ) {
        dispatch(signupFailed(err.message));
      }
    })
  }
}