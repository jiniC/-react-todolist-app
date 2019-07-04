// action type(명령어) 정의
export const FETCH_TODO = 'FETCH_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// action creators(액션 메서드, 액션 객체를 만드는 함수) 정의
// API 통신과 같은 작업을 함
// 액션 메서드에서는 리듀서(reducer)로 데이터 생성을 요청함
// 비즈니스 로직을 주로 액션 메서드에 개발하기 때문에 액션 메서드는 컴포넌트의 재활용을 높이고 코드를 관리하는 데 중요함
// 비동기 통신이 필요할 때는 redux-thunk 라이브러리나 react-saga 라이브러리를 사용
export const fetchTodosAction = () => {
	return dispatch => {
		return fetch('/api') // 1 (server에 요청)
			.then(res => res.json()) // 4
			// 응답이 온 후 dispatch() 메서드를 호출하여 비동기 통신 적용
			.then(data => dispatch({ type: FETCH_TODO, data })); // 5 (결과물인 data -> reducers로 보냄)
	}
};

export const createTodoAction = data => {
	return dispatch => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		return fetch('/api', options) // 1
			.then(res => res.json()) // 4
			.then(data => { dispatch({ type: CREATE_TODO, data }) }); // 5
	}
};

export const updateTodoAction = data => {
	return dispatch => {
		const options = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		return fetch('/api', options) // 1
			.then(res => res.json()) // 4
			.then(data => dispatch({ type: UPDATE_TODO, data})); // 5
	}
};

export const deleteTodoAction = data => {
	return dispatch => {
		const options = {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};
		return fetch('/api', options) // 1
			.then(() => dispatch({ type: DELETE_TODO, data })); // 4
	}
};
