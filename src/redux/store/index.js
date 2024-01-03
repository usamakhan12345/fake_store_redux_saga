import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducers/index"
import { createStore } from 'redux'
// import getProducts from "../saga"
// import createSagaMiddleware from 'redux-saga'
import { setupListeners } from "@reduxjs/toolkit/query"
import { pokemonApi } from "../../RTKQuery/apiSlice"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

// const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
  }
    
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: {

        [pokemonApi.reducerPath]: pokemonApi.reducer,
        reducer: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
    // mid  dleware : () => [sagaMiddleware]
})

setupListeners(store.dispatch)
    let persistor = persistStore(store)
  
export default store

