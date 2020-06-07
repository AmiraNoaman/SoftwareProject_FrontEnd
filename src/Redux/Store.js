import {createStore,applyMiddleware} from 'redux'
import Reducer from './songs/StreamReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer'
import logger from 'redux-logger'



const Store=createStore(RootReducer,composeWithDevTools(applyMiddleware(logger)));




export default Store