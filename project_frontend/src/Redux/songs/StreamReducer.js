
import {StreamSong} from '../Constants'
import {UpdatePage} from '../Constants'


const StreamInitialState ={
    songs:[],
    id:'',
    image:'',
    title:'',
    description:''
}

export const StreamReducer =(state=StreamInitialState,Action)=>{
    switch(Action.type){
        case StreamSong:
        return {
            ...state,
            songs: Action.payload
        }
        case UpdatePage:
        return {
            ...state,
            id: Action.payload.id,
            image: Action.payload.url,
            title: Action.payload.name,
            description: Action.payload.description
        }
        default: return state;
    }
}

