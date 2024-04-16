import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

import { setAnswer } from "./answer";

const reducer = combineReducers({
	answer: setAnswer
});

const store = configureStore({ reducer });

export default store;
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;