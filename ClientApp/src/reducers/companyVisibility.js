import {
  SET_DIALOG_VISIBILITY
} from '../actions/index';


const INITIAL_STATE = {visible: false, word: null};

export const companyVisibility = (state=INITIAL_STATE, action) => {
    var newState = Object.assign({}, state);

    if (action.type === SET_DIALOG_VISIBILITY) {
      newState.visible = action.payload.visible;
      newState.word = action.payload.word;
    }
    return newState;
}
