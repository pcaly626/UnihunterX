import { GET_MONSTERS_BY_RATING, CREATE_PLAYER, GET_PLAYERS, CREATE_ENCOUNTER } from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState = {
    monsters: [],
    players: [],
    encounter: new Object,
}

export default function( state = initialState, action ){

    switch(action.type){
        case CREATE_ENCOUNTER:
            return{
                ...state,
                encounter: action.payload
            }
        case GET_MONSTERS_BY_RATING:
            return{
                ...state,
                monsters: action.payload
            };
        case CREATE_PLAYER:
            return{
                ...state,
                players: action.payload
            }
        case GET_PLAYERS:
            return{
                ...state,
                players: action.payload
            }
        default:
            return{
                ...state,
               
            }
    }
}