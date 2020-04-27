import axios from 'axios';
import { GET_MONSTERS_BY_RATING } from './types';
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