import {GET_POPULAR_TACOS} from './actionTypes';

export const getPopularTacos = () => ({
   type: GET_POPULAR_TACOS,
   url: 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
});