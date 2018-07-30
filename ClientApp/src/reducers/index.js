import { combineReducers } from 'redux';
import { commonWordReducer } from './sampleReducers';
import { companyVisibility } from './companyVisibility'; 

const reducers = combineReducers({
    commonWordReducer,
    companyVisibility,
});

export default reducers;
