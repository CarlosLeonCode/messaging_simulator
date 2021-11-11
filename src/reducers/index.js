import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import emojisBoxReducer from "./emojisBoxReducer";

export default combineReducers({
    messages: messagesReducer,
    emojisBox: emojisBoxReducer
})