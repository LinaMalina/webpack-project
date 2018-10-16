import initialState from './../store/initialState';
import injectReducer from './../store/injectReducer';
import {
    GET_POPULAR_TACOS_SUCCESS,
} from '../action/actionTypes';

export default injectReducer(initialState.PopularTacos, {
  [GET_POPULAR_TACOS_SUCCESS]: (state, { payload }) => ({
    resipe: payload,
  })
});
