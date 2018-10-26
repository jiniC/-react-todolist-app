import React from 'react'

// ({todos}) : props로 내려온거임 (아래 코드 정리)
const TodoListArea = ({todos}) => {
    return (
        <div className='todolist_area'>
            <ul className='list_todos'>
                {todos.map((item, index) => {
                    return (
                        // key값 index로 되도록 하지말고 id로 하길 추천
                        <li key={index} className='list_item'>
                            <div calssName='txt'>{item.text}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
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