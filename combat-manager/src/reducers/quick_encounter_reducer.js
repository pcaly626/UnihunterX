import { GET_MONSTERS_BY_RATING, GET_PLAYERS, GET_PLAYER, CREATE_PLAYER } from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState = {
    monsters: [],
    players: [],
    encounter: new Object,
    player: [],
}

export default function( state = initialState, action ){

    switch(action.type){
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
        case GET_PLAYER:
            return{
                ...state,
                player: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}