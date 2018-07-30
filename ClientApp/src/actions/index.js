import { createAction } from "redux-actions";
import * as api from "../Api";



export const REQUEST_COMMON_WORDS = "REQUEST_COMMON_WORDS"
export const requestCommonWords = (loading) => ({
  type:    REQUEST_COMMON_WORDS,
  payload: { loading }
})


export const RECEIVE_COMMON_WORDS_SUCCESS = "RECEIVE_COMMON_WORDS_SUCCESS"
export const receiveCommonWordsSuccess = createAction(
  RECEIVE_COMMON_WORDS_SUCCESS,
  (loading, commonWords) => ({ loading, commonWords })
)

export const RECEIVE_COMMON_WORDS_FAILURE = "RECEIVE_COMMON_WORDS_FAILURE"
export const receiveCommonWordsFailure = createAction(
  RECEIVE_COMMON_WORDS_FAILURE,
  (loading, errorInfo) => ({ loading, errorInfo })
)


export function getCommonWords() {
  return (dispatch) => {
    dispatch(requestCommonWords(true))
    return api.getCommonWord().then(
      response => {
        dispatch(receiveCommonWordsSuccess(false, response))
        return Promise.resolve(response)
      },
      error => {
        dispatch(receiveCommonWordsFailure(false, error))
      }
    )
  }
}
