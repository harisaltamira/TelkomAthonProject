import axios from 'axios';
import {REQUEST_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from './Type';

export const fetchLogin = body => async dispatch => {
  console.log('hit');
  try {
    dispatch({type: REQUEST_LOGIN});
    const data = await axios.post(
      'http://code.aldipee.com/api/v1/auth/login',
      body,
    );
    console.log(data.data);
    dispatch({type: LOGIN_SUCCESS, payload: data.data});
  } catch (error) {
    let err = 'Something went wrong';
    console.log(err);
    dispatch({type: LOGIN_FAILED, payload: err});
  }
};
