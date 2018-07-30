import { combineReducers } from 'redux';
import { commonWordReducer } from './sampleReducers';

const reducers = combineReducers({
    commonWordReducer,
});

export default reducers;
