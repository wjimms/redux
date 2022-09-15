import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { createUserReducer } from "./createUserReducer";

export const rootReducer = combineReducers({
    title:titleReducer,
    users: createUserReducer
})