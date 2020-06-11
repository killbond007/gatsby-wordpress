import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

import reducers from "../modules/root/reducers"
import sagas from "../modules/root/sagas"

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const enhancers = applyMiddleware(sagaMiddleware)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose
  const store = createStore(reducers, composeEnhancers(enhancers))

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore()
