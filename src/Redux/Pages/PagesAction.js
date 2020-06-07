import {CurrentPage} from '../Constants'

export const GetPage=(data)=>{
    return {
        type: CurrentPage,
        payload: data
    }
} 