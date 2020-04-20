import axios from 'axios';
import { GET_MONSTERS_BY_RATING } from './types';
import { openDatabase } from 'react-native-sqlite-storage';



// alternative:

export const getMonstersByRating = ( rate ) => dispatch => {
        const db = openDatabase({ name: 'combat_db' });
        dispatch({
        type: GET_MONSTERS_BY_RATING,
        payload: ["h2"]
        })
};