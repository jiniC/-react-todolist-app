import React, { Component} from 'react'
import {connect} from 'react-redux'
import { fetchTodosAction, createTodoAction, updateTodoAction, deleteTodoAction } from '../../actions/todos'; 
import Header from '../Header';
import Footer from '../Footer';
import WriteArea from '../WriteArea';
import TodoListArea from '../TodoListArea';

/* 
state(상태)
: 컴포넌트에서 쓰는 역할
: 컴포넌트 간 상호작용 가능
: state 변경되면 수명 주기에 따라 이벤트 트리거가 감지, 부모 컴포넌트가 다시 rendering됨 (주로 사용자 이벤트가 이에 해당)

props(속성)
: 컴포넌트 구성하는 역할
: react 강점인 컴포넌트를 원하는 대로 조합하고 재사용이 가능한 이유
: 부모 컴포넌트가 전달하며 자식은 변경할 수 없음
*/

// state관리 필요하면: class, state없으면: const
// TodoList: 컨테이너 컴포넌트
// 비즈니스 로직은 컨테이너 컴포넌트에서 개발한다. 그래야 프레젠테이션 컴포넌트인 재활용성이 높아진다.
class TodoList extends Component {
	componentDidMount() {
		const { fetchTodos } = this.props;
		fetchTodos()
	}
	render() {
		// 프레젠테이션 컴포넌트의 prop에 state를 설정하고, 액션을 보내는 함수를 설정
		const { todos, onCreate, onUpdate, onDelete } = this.props;
		return (
			<>
				<Header />
				<div className="content">
					<WriteArea onCreate={onCreate} />
					<TodoListArea {...{ todos, onUpdate, onDelete }} />
				</div>
				<Footer />
			</>
		)
	}
}

// state를 다 props로 전달해야함
const mapStateToProps = ({todos}) => ({todos});

// dispatch()를 다 props로 전달해야함
const mapDispatchToProps = {
	fetchTodos: fetchTodosAction,
	onCreate: createTodoAction,
	onUpdate: updateTodoAction,
	onDelete: deleteTodoAction,
};

// 컴포넌트 자체의 상태(색상, 애니메이션 등)는 state로 처리하고, 전체적으로 관리해야 하는 상태(서버와 동기화하는 데이터 등)는 부모 컴포넌트에서 prop으로 받아 처리
// 물론 prop을 갱신하면 App 컴포넌트가 전반적으로 갱신되기 때문에 state를 갱신하는 것보다는 비교적 느림.
// 효과적으로 state를 사용하면 좋지만, prop으로 처리해야 하는 작업을 state로 처리하면 오히려 코드 작성이 더 어려워짐

// prop은 state와 다르게 컨테이너 컴포넌트에서 연결해 사용한다. 그래서 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 state와 dispatch() 메서드를 전달해야 한다. 이때 사용하는 메서드가 react-redux에서 제공하는 connect() 메서드다.
// 컨테이너 컴포넌트 역할을 하는 TodoList 컴포넌트에서 프레젠테이션 컴포넌트(TodoListArea, WriteArea, Header, Footer)로 state와 dispatch() 메서드를 전달
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)



// 다른 ex.
// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
// const todolistStateToProps = (state) => {
// 	return {
// 		todos: state.todos
// 	}
// }

// 컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
// const todolistDispatchToProps = (dispatch) => {
// 	return {
// 		onClick(data){
// 			dispatch(complete(data)) // 액션 메서드
// 		}
// 	}
// }

// 연결
// export default connect(todolistStateToProps,todolistDispatchToProps)(TODOList);