import React from 'react'

const TodoList = (props) => {
  return (
       <li className='list-item'>
       {props.item}
       <span className='icons'>
       <i class="fa-solid fa-trash"></i>
       </span>
       </li>
  )
}

export default TodoList