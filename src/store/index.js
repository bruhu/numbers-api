// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. 
// a store is not a class.
// it's just an object with a few methods on it.
// to create it, pass your root reducing function to createStore.


// import Redux store methods
import { createStore, applyMiddleware, compose } from 'redux'
// import Saga middleware
import createSagaMiddleware from 'redux-saga'
// import watcher from saga file we created
import { watcherSaga } from '../sagas'
// import the Reducer
import { reducer } from '../reducers'

// create a Saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// compose the middleware and ReduxDevTools
const composed = compose(applyMiddleware(sagaMiddleware), reduxDevTools);

// create a Redux store using the Reducer and connect the Saga middleware to the Redux store with DevTools enables
export const store = createStore(
    reducer,
    composed
);

// run the watcher
sagaMiddleware.run(watcherSaga);