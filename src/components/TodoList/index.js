import React, { Component} from 'react'
import Header from '../Header';
import Footer from '../Footer';
import WriteArea from '../WriteArea';
import TodoListArea from '../TodoListArea';

// state가 필요할때는 class로
class TodoList extends Component {
	id = 0

	state = {
		todos: [],
	}

	handleCreate = data => {
		// 받아온 데이터를 todos배열에 합쳐줌
		const newTodos = this.state.todos.concat({ id: this.id++, ...data })
		this.setState({ todos: newTodos })
	}
	
	handleUpdate = (id, data) => {
		// 업데이트가 되면 자식한테 id와 새로운 데이터 받음 -> 새로받은 내용으로 설정
		const newTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				// 수정한건 수정 된 걸로 return
				return { id, ...data }
			} else {
				return todo
			}
		})
		this.setState({ todos: newTodos });
	}

	handleRemove = (id) => {
		const {todos} = this.state
		const newTodos = todos.filter(todo => todo.id !== id)
		this.setState({todos: newTodos})
	}

	render() {
		// todos 라는 props를 내려줌
		return (
			<>
				<Header />
				<div className="content">
					<WriteArea
						onCreate={this.handleCreate}
					/>
					<TodoListArea
						todos={this.state.todos}
						onUpdate={this.handleUpdate}
						onRemove={this.handleRemove}
					/>
				</div>
				<Footer />
			</>
		);
	}
}

// const TodoList = () => {
// 	return (
//         <>
//             <Header></Header>
//             <div className='content'>
//                 TodoList
//                 <div className='write_area'>
//                 </div>
//                 <div className='todolist_area'>
//                     <ul className='list_todos'>
//                         <li className='list_item'>
//                             <div calssName='txt'>첫번째 할일 입니다.</div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <Footer></Footer>
//         </>
//     )
// };

export default TodoList;