import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducers = require('../reducers')
            store.replaceReducer(nextRootReducers)
        })
    }

    return store
}