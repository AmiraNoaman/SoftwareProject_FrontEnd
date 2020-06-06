import {Recommend} from '../Constants'

const InitialState={
    artists:[]
}

export const RecommendReducer=(state=InitialState,Action)=>{
    switch(Action.type){
        case Recommend:
            switch(Action.payload[0]){
                case true:
                    console.log(Action.payload[1])
                    state.artists.push(Action.payload[1])
                    return{
                        ...state,
                        // artists: ()=>state.artists.push(Action.payload[1])
                    }
                case false:
                    const index=state.artists.indexOf(Action.payload[1])
                    console.log("removed item at",index)
                    artists:state.artists.splice(index,1)
                    return{
                        ...state,
                    }
        }
        // else{
        //     return{
        //         ...state,
        //         artists:artists.splice(artists.indexOf(Action.payload[1]))
        //     }
        // }
        default: return state
    }
}