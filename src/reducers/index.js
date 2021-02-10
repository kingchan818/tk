import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detialReducder from './detialReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detial: detialReducder,
});

export default rootReducer;
