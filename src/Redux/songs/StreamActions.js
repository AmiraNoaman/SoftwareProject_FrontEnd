import {StreamSong} from '../Constants'
import {UpdatePage} from '../Constants'


export const Stream =(Data)=>{
    return {
        type: StreamSong,
        payload: Data
    }
}


export const LoadSongs = (Data)=>{
    return{
        type: UpdatePage,
        payload: Data
    }
}