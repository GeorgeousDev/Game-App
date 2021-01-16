import { combineReducers } from 'redux';
import gamesReducer from './GameReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
})
export default rootReducer;