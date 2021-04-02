import React from 'react'
import PropTypes from 'prop-types'

TodoList.propTypes = {
  todos: PropTypes.array,
  handleClick: PropTypes.func
}

TodoList.defaultProps = {
  todos: [],
  handleClick: null
}

function TodoList(props) {

  const{todos, handleClick} = props
  
  function triggerHandleClick(todo) {
    if(handleClick){
      handleClick(todo)
    }
    return
  }
 
  return (
    <div>
      {todos.map(todo => 
        <li key={todo.id} onClick={() => triggerHandleClick(todo)}>{todo.title}</li>
      )}
    </div>
  )
}



export default TodoList

