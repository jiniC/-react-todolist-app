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
class TodoList extends Component {
	componentDidMount() {
		const { fetchTodos } = this.props
		fetchTodos()
	}
	render() {
		const { todos, onCreate, onUpdate, onDelete } = this.props
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

// state가 다 props가 됨
const mapStateToProps = ({todos}) => ({todos})

const mapDispatchToProps = {
	fetchTodos: fetchTodosAction,
	onCreate: createTodoAction,
	onUpdate: updateTodoAction,
	onDelete: deleteTodoAction,
}

// redux와 연결
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)