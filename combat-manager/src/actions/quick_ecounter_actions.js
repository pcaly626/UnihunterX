import axios from 'axios';
import { GET_MONSTERS_BY_RATING } from './types';




// alternative:

export const getMonstersByRating = ( rate ) => dispatch => {
        
        dispatch({
        type: GET_MONSTERS_BY_RATING,
        payload: ["h2"]
        })
};