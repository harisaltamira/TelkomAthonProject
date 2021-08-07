import axios from 'axios';
import {STORE_API_MOVIE, STORE_API_MOVIE_DETAIL, SET_LOADING} from './Type';

export const fetchMovie = () => async dispatch => {
  try {
    dispatch({type: SET_LOADING, loading: true});
    const {data} = await axios.get('http://code.aldipee.com/api/v1/movies');
    dispatch({type: STORE_API_MOVIE, payload: data.results});
    dispatch({type: SET_LOADING, loading: false});
  } catch (error) {
    let err = 'Something went wrong';
    console.log(err);
    dispatch({type: SET_LOADING, loading: false});
  }
};

export const fetchMovieDetail = id => async dispatch => {
  try {
    dispatch({type: SET_LOADING, loading: true});
    const {data} = await axios.get(
      `http://code.aldipee.com/api/v1/movies/${id}`,
    );
    dispatch({type: STORE_API_MOVIE_DETAIL, payload: data});
    dispatch({type: SET_LOADING, loading: false});
  } catch (error) {
    let err = 'Something went wrong';
    console.log(err);
    dispatch({type: SET_LOADING, loading: false});
  }
};
