import { CREATE_TODO, UPDATE_TODO, DELETE_TODO} from '../actions/todos'
let id = 0;

const todos = (state=[], action) => {
    switch (action.type) {
		case CREATE_TODO:
			return state.concat({ id: id++, ...action.data });
		case UPDATE_TODO:
			return state.map(todo => todo.id === action.id ? {id: action.id, ...action.data}: todo)
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.id)
		default:
			return state;
	}
}

export default todos