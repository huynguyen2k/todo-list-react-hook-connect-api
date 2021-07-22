import { applyMiddleware, combineReducers, createStore } from "redux"
import todoListReducer from "./reducers/todoListReducer"
import loadingReducer from "./reducers/loadingReducer"

// REDUX SAGA
import createMiddlewareSaga from "redux-saga"
import rootSaga from "./sagas/rootSaga"

const rootReducer = combineReducers({
	todoListReducer,
	loadingReducer,
})

const middlewareSaga = createMiddlewareSaga()

const store = createStore(rootReducer, applyMiddleware(middlewareSaga))

middlewareSaga.run(rootSaga)

export default store
