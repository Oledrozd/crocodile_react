import { combineReducers } from 'redux';
import actualWord from './actualWord.js';
import previousWords from './previousWords.js';
import roundData from './roundData.js';
import teamsData from './teamsData.js';

const crocodileReducer = combineReducers({
    actualWord,
    previousWords,
    roundData,
    teamsData
});

export default crocodileReducer;