import { FETCH_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todos';

const todos = (state=[], action) => {
    switch (action.type) {
		case FETCH_TODOS:
			return action.data; // -> component로 넘어감 (가장 겉에있는 TodoList 컴포넌트로)
		case CREATE_TODO:
			return state.concat({ ...action.data });
		// case UPDATE_TODO:
		// 	return state.map(todo => (todo.id === action.id ? { id: action.id, ...action.data } : todo));
		case DELETE_TODO:
			return state.filter(todo => todo._id !== action.data._id); // action.data : 서버까지 갔다온 항목
		default:
			return state;
	}
}

export default todos