import { GET_MONSTERS_BY_RATING } from '../actions/types';

const initialState = {
    monsters: []
}

export default function( state = initialState, action ){

    switch(action.type){
        case GET_MONSTERS_BY_RATING:
            return{
                ...state,
                monsters: action.payload
            };
        default:
            return{
                ...state
            }
    }
}