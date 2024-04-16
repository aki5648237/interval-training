import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
	answer: ''
}

export const setAnswer = createAction<String>('answerSet');

// const slice = createSlice({
// 	name: 'answer',
// 	initialState,
// 	reducers: {
// 		setAnswer: (state, action) => {
// 			return Object.assign({}, state, {answer: action.payload})
// 		}
// 	}
// });

// export default slice.reducer;
// export const setAnswer = slice.actions;