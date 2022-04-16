import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import personajeReducer from "../reducers/personajeReducer";




const rootReducer = combineReducers({
    personaje :personajeReducer 
});

export const store = createStore(
rootReducer, composeWithDevTools(applyMiddleware(thunk)) // 
)
export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector


