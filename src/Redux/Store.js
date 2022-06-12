import { createStore } from "redux";
import rootReducers from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";


import {
    persistStore,
   
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import persistedReducer from './Reducer/index';



// const store = createStore(rootReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export const persistor = persistStore(store);

// export default store;