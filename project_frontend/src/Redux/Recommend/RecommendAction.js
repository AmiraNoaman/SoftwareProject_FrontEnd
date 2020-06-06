import {Recommend} from '../Constants'

export const RecommendArtist=(data)=>{
    return{
    type:Recommend,
    payload:data
    }
}