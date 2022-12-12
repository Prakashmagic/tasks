import { createStore } from "redux";
import rootReducer from "../reducer";

export default function configureStore(initialvalue){
    return createStore (rootReducer, initialvalue);   
}