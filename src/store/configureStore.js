import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducers = require('../reducers')
            store.replaceReducer(nextRootReducers)
        })
    }

    return store
}