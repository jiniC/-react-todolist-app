import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Routes from './routes'
import reducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), devTools)

);

ReactDOM.render (
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
)