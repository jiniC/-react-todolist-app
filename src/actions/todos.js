export const CREATE_TODO = 'CREATE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const createTodoAction = data => {
	return {
		type: CREATE_TODO,
		data,
	};
};

export const updateTodoAction = (id, data) => {
	return {
		type: UPDATE_TODO,
		id,
		data,
	};
};

export const deleteTodoAction = id => {
	return {
		type: DELETE_TODO,
		id,
	};
};

