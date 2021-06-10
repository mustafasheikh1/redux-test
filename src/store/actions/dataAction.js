import { ADD_TEST_DATA } from './types'

export const addData = ( number ) => dispatch => {
  dispatch({
    type: ADD_TEST_DATA,
    payload: number 
  })
}
