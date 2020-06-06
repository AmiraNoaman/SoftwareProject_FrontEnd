import {LikeSong} from '../Constants';
import {LikeAlbum} from '../Constants';
import {LikePlaylist} from '../Constants';

const InitialState ={
    song:'',
    album:'',
    playlist:'',
}

export const LikeReducer=(state=InitialState,Action)=>{
    switch(Action.type){
        case LikeSong:
            return{
                ...state,
                song: Action.payload
            }
        case LikeAlbum:
            return{
                ...state,
                album: Action.payload
            }
        case LikePlaylist:
            return{
                ...state,
                playlist: Action.payload
            }
        default: return state

    }
}