import reducer from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import  editReducer from './editReducer'
import promiseMiddleware from "redux-promise-middleware";

const rootReducer =  combineReducers({
    userReducer: reducer, 
    editReducer: editReducer
})

export default createStore(rootReducer,  applyMiddleware(promiseMiddleware));