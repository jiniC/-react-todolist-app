import React, { Component} from 'react'
import Header from '../Header';
import Footer from '../Footer';
import WriteArea from '../WriteArea';
import TodoListArea from '../TodoListArea';

// state가 필요할때는 class로
class TodoList extends Component {
	state = {
		todos: [],
	};

	handleCreate = (data) => {
		// 받아온 데이터를 todos배열에 합쳐줌
		const newTodos = this.state.todos.concat({ ...data })
		this.setState({ todos: newTodos });
	}
	render() {
		// todos 라는 props를 내려줌
		return (
			<>
				<Header />
				<div className="content">
					<WriteArea onCreate={this.handleCreate} />
					<TodoListArea todos={this.state.todos} />
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