import { combineReducers } from 'redux';
import factsReducer from './factsReducer';
import singleFactReducer from './singleFactReducer';

export default combineReducers({
    facts: factsReducer,
    singleFact: singleFactReducer
});