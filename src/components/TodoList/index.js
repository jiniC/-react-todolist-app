import React, { Component} from 'react'
import {connect} from 'react-redux'
import { fetchTodosAction, createTodoAction, updateTodoAction, deleteTodoAction } from '../../actions/todos'; 
import Header from '../Header';
import Footer from '../Footer';
import WriteArea from '../WriteArea';
import TodoListArea from '../TodoListArea';

// state없으니 이제 const로 바꿔주기
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

// return 만 있으면 이렇게 쓸 수도 있음
// const TodoList = ({ todos, onCreate, onUpdate, onDelete }) => (
// 	<>
// 		<Header />
// 		<div className="content">
// 			<WriteArea onCreate={onCreate} />
// 			<TodoListArea todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
// 		</div>
// 		<Footer />
// 	</>
// )

// state가 다 props가 됨
const mapStateToProps = ({todos}) => ({todos})
// 동일
// const mapStateToProps = (state) => {
// 	return {
// 		todos: state.todos
// 	}
// }

// component -> actions -> reducers -> actions -> component
// 여기서 해줬던 handleCreate, handleUpdate, handleRemove 를 reducers에서 해줌
const mapDispatchToProps = {
	fetchTodos: fetchTodosAction,
	onCreate: createTodoAction,
	onUpdate: updateTodoAction,
	onDelete: deleteTodoAction,
}

// redux랑 연결 (여기서 state를 불러서 씀)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)