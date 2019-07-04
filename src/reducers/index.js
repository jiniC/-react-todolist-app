import {combineReducers} from 'redux'
import todos from './todos'

// combineReducers() 메서드로 리듀서를 합쳐서 사용
const rootReducer = combineReducers({
    todos: todos,
});

export default rootReducer