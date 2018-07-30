import {
    RECEIVE_COMMON_WORDS_SUCCESS,
    RECEIVE_COMMON_WORDS_FAILURE,
    REQUEST_COMMON_WORDS
} from '../actions/index';


const INITIAL_STATE = {loading: false, commonWords:[], errorInfo: null};

export const commonWordReducer = (state=INITIAL_STATE, action) => {
	var newState = Object.assign({}, state);

	if (action.type === RECEIVE_COMMON_WORDS_SUCCESS) {
        newState.commonWords = action.payload.commonWords;
        newState.loading = action.payload.loading;
        newState.errorInfo = null;
    } else if (action.type === RECEIVE_COMMON_WORDS_FAILURE) {
        newState.commonWords = [];
        newState.loading = action.payload.loading;
        newState.errorInfo = action.payload.errorInfo;
    }  else if (action.type === REQUEST_COMMON_WORDS) {
        newState.commonWords = [];
        newState.loading = action.payload;
        newState.errorInfo = null;
    }
	return newState;
}
