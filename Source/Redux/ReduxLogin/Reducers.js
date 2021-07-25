import {REQUEST_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from './Type';

const INITIAL_STATE = {
  loginResponse: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
        loading: false,
        error: '',
      };
    case LOGIN_FAILED:
      return {...state, error: action.payload, loading: false};
    default:
      return state;
  }
};
