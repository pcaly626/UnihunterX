import axios from 'axios';
import { CREATE_ENCOUNTER, GET_MONSTERS_BY_RATING, CREATE_PLAYER, GET_PLAYERS } from './types';
const { ipcRenderer } = window.require('electron');


export const getMonstersByRating = (rate) => dispatch => {
        console.log(rate)
        ipcRenderer.send('get-monsters', rate)
        
        ipcRenderer.on( "return-monsters",( event, data) => {
                console.log(data)
                dispatch({
                type: GET_MONSTERS_BY_RATING,
                payload: data
                })
        })
};

export const createPlayer = (player) => dispatch =>{
        ipcRenderer.send('create-player', player)

        ipcRenderer.on('player-created', (event, data)=>{
                console.log(data)
                dispatch({
                        type: CREATE_PLAYER,
                        payload: data
                })
        })
}


export const getPlayers = () => dispatch =>{
        ipcRenderer.send('get-players')

        ipcRenderer.on('retrieve-players', (event, data)=>{
                console.log(data)
                dispatch({
                        type: GET_PLAYERS,
                        payload: data
                })
        })
}

export const createEncounter = () => dispatch =>{
        ipcRenderer.send('create-encounter')

        ipcRenderer.on('encounter-created', (event, data) =>{
                console.log(data)
                dispatch({
                        type: CREATE_ENCOUNTER,
                        payload: data
                })
        })
}