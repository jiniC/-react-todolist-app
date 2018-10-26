import React, { Component} from 'react';

class WriteArea extends Component {
	state = {
		todoText: '',
	};

	/*
    handleChange(e) {
        console.log(e.target.value);
        this.setState({ todoText: e.target.value }) // 여기서 this는 input인데 WrtieArea컴포넌트 자체여야함 -> 바인드필요 (방법1, 2)
    }
    */
	// 방법1
	// constructor(){
	//     super()
	//     this.handleChange = this.handleChange.bind(this)
	// }

	// 방법2 애로우펑션
	handleChange = e => {
        const todoText = e.target.value
        this.setState({ todoText })
        //this.setState({ todoText: e.target.value })
	};

	handleClick = () => {
        if (this.state.todoText.trim() !== '') {
            const text = this.state.todoText
            this.props.onCreate({ text }) // -> data로 들어감
            this.setState({ todoText: '' })
            this.input.focus()
        } else {
            alert('할 일을 입력해주세요.')
        }
	};

	handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }

	// htmlFor, className, . . . 이런것들이 다 props임
	render() {
        const {todoText} = this.state
		return (
			<div className="write_area">
				<label htmlFor="todoText">입력</label>
				<input
					type="text"
					id="todoText"
					className=""
					placeholder="할 일을 입력하세요."
					value={todoText}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					ref={el => (this.input = el)}
				/>
				<button type="button" onClick={this.handleClick}>
					등록
				</button>
			</div>
		);
	}
};
    
export default WriteArea;