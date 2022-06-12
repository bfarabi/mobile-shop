import { combineReducers } from "redux";
import addItem from './AddItem';
import {
    persistReducer,
   
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
const rootReducers =combineReducers({
    addItem
})

const persistedReducer = persistReducer(persistConfig, rootReducers);


export default persistedReducer;

// export default rootReducers;