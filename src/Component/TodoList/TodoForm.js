import React ,{ useState } from 'react'

function TodoForm() {
    const [input,setInput] =useState()
      
    // https://www.youtube.com/watch?v=E1E08i2UJ
    
    return (
        <div>
            <form className="todoform">
                <input type="text" placeholder='add todo' value={input} name='text' className="todoInput"/>
                <button className="todo-button">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
