import {
    RECEIVE_COMMON_WORDS_SUCCESS,
    RECEIVE_COMMON_WORDS_FAILURE
} from '../actions/index';


const INITIAL_STATE = {loading: true, commonWords:[], errorInfo: null};

export const commonWordReducer = (state=INITIAL_STATE, action) => {
	var newState = Object.assign({}, state);
    console.log(action);
	if (action.type === RECEIVE_COMMON_WORDS_SUCCESS) {
        newState.commonWords = action.payload.commonWords;
        newState.loading = action.payload.loading;
        newState.errorInfo = null;
    } else if (action.type === RECEIVE_COMMON_WORDS_FAILURE) {
        newState.commonWords = [];
        newState.loading = action.payload.loading;
        newState.errorInfo = action.payload.errorInfo;
    } else {
        newState = INITIAL_STATE;
    }
	return newState;
}
