import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducers/index"
// import getProducts from "../saga"
// import createSagaMiddleware from 'redux-saga'
import { setupListeners } from "@reduxjs/toolkit/query"
import { pokemonApi } from "../../RTKQuery/apiSlice"

// const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: {

        [pokemonApi.reducerPath]: pokemonApi.reducer,
        reducer: rootReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
    // middleware : () => [sagaMiddleware]
})

// sagaMiddleware.run(getProducts)
setupListeners(store.dispatch)
export default store