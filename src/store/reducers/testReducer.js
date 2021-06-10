import { ADD_TEST_DATA } from '../actions/types';

const initialState = {
    data: 0
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TEST_DATA:
			return { ...state, data: state.data + action.payload }
		default:
			return state
	}
}	

