import {STORE_API_MOVIE, STORE_API_MOVIE_DETAIL, SET_LOADING} from './Type';

const INITIAL_STATE = {
  dataMovie: [],
  dataMovieDetail: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.loading};
    case STORE_API_MOVIE:
      return {...state, dataMovie: action.payload};
    case STORE_API_MOVIE_DETAIL:
      return {
        ...state,
        dataMovieDetail: action.payload,
      };
    default:
      return state;
  }
};
