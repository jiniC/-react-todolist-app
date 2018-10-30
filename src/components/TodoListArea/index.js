import React, {Component} from 'react'

import TodoListItem from './TodoListItem';

// ({todos}) : props로 내려온거임 (아래 코드 정리)
// state관리를 위해 class로 바꿔줌 
class TodoListArea extends Component {

	render() {
        // TodoList가 내려준 props를 TodoListItem한테 내려줌
        const { todos, onUpdate, onRemove } = this.props;
        return (
            <div className="todolist_area">
                <ul className="list_todos">
                    {todos.map(todo => {
                        return (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                onUpdate={onUpdate}
                                onRemove={onRemove}
                            />
                        );
                    })}
                </ul>
            </div>
        );
	}
};

// const TodoListArea = (props) => {
//     const { todos } = props
//     return (
//         <div className='todolist_area'>
//             <ul className='list_todos'>
//                 {todos.map((item, index) => {
//                     return (
//                         // key값 index로 되도록 하지말고 id로 하길 추천
//                         <li key={index} className='list_item'>
//                             <div calssName='txt'>{item.text}</div>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// };

export default TodoListArea;