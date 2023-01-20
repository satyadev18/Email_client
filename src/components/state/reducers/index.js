import { combineReducers } from "redux";
import FavReducer from './FavReducers';
import Readreducer from "./ReadReducers";


const reducers = combineReducers({
     fav: FavReducer,
     read:Readreducer,

})

export default reducers