export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const fetchTodosAction = () => {
	return dispatch => {
		// server에 요청
		return fetch('/api')
			.then(res => res.json())
			.then(data => dispatch({ type: FETCH_TODOS, data })) // 결과물인 data -> reducers로 보냄
	}
}

export const createTodoAction = data => {
	return dispatch => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
		return fetch('/api', options)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				dispatch({ type: CREATE_TODO, data })
			});
	}
}

export const updateTodoAction = (id, data) => {
	const action = {
		type: UPDATE_TODO,
		id,
		data,
	}

	return dispatch => {
		dispatch(action)
	}
}

export const deleteTodoAction = id => {
	const action = {
		type: DELETE_TODO,
		id,
	}

	return dispatch => {
		dispatch(action);
	}
}
