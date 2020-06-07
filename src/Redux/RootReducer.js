import {StreamReducer} from './songs/StreamReducer';
import {combineReducers} from 'redux'
import {LikeReducer} from './songs/LikeReducer'
import {PageReducer} from './Pages/PagesReducer'
import {RecommendReducer} from './Recommend/RecommendReducer'

const RootReducer=combineReducers({
    stream: StreamReducer,
    like: LikeReducer,
    page: PageReducer,
    recommend:RecommendReducer
})

export default RootReducer;