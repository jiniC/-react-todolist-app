import React, { Component} from 'react'

class TodoListItem extends Component {
	state = {
		isEditMode: false,
		text: '',
	};

	handleEditToggle = () => {
		const { todo, onUpdate } = this.props;
		const { text } = this.state;
		if (this.state.isEditMode) {
			if (text.trim() !== '') {
				// 앞text: 데이터이름, 뒤text: state
				onUpdate({_id:todo._id, text:text});
			} else {
				alert('할 일을 입력해주세요.');
			}
		} else {
			this.setState({ text: todo.text });
		}
		this.setState({ isEditMode: !this.state.isEditMode });
	};

	handleChange = e => {
		const newText = e.target.value;
		this.setState({ text: newText });
	};

	handleKeyPress = e => {
		if (e.key === 'Enter') {
			this.handleEditToggle();
		}
	};

	handleRemove = () => {
		const { todo, onDelete} = this.props
		if(window.confirm('정말 삭제 하실건가요?')) {
			onDelete({_id: todo._id});
		} else {

		}
	};

	render() {
		const { isEditMode, text } = this.state;
		const { todo } = this.props;
		// console.log('TODO: ', todo)

		return (
			<li key={todo._id} className="list_item">
				{isEditMode ? (
					<input type="text" value={text} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
				) : (
					<div calssName="txt">{todo.text}</div>
				)}
				<div className="btn_area">
					<button type="button" onClick={this.handleEditToggle}>
						{isEditMode ? '저장' : '수정'}
					</button>
					<button type="button" onClick={this.handleRemove}>
						삭제
					</button>
				</div>
			</li>
		);
	}
};

export default TodoListItem;