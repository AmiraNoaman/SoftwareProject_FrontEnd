import {CurrentPage} from '../Constants'

const InitialState={
    PageName: '',
}

export const PageReducer=(state=InitialState,Action)=>{
    switch(Action.type){
        case CurrentPage:
            return{
                ...state,
                PageName: Action.payload
            }
        default: return state
    }
}