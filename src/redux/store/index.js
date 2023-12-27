import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducers/index"
import getProducts from "../saga"
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer : rootReducer,
    middleware : () => [sagaMiddleware]

})

sagaMiddleware.run(getProducts)
export default store