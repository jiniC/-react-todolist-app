import React, {Component} from 'react'

import TodoListItem from './TodoListItem';

class TodoListArea extends Component {

	render() {
        // TodoList가 내려준 props를 TodoListItem한테 내려줌
        const { todos, onUpdate, onDelete } = this.props;
        return (
            <div className="todolist_area">
                <ul className="list_todos">
                    {todos.map(todo => {
                        return (
                            <TodoListItem
                                key={todo._id}
                                todo={todo}
                                onUpdate={onUpdate}
                                onDelete={onDelete}
                            />
                        );
                    })}
                </ul>
            </div>
        );
	}
};

export default TodoListArea;