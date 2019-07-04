import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Routes from './routes'
import reducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 스토어를 생성하고
// 비동기 처리를 위해 redux-thunk 라이브러리를 미들웨어로 설정
// 디버깅을 위해 react-devtool을 설정
// 미들웨어는 간단하게 보면 dispatch() 메서드를 실행하기 전후에 원하는 작업을 할 수 있게 하는 도구다.
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), devTools)
);

ReactDOM.render (
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
