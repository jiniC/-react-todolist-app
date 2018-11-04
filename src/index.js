import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Routes from './routes'
import reducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, devTools);

ReactDOM.render (
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
)