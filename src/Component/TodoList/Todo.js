import React,{useState} from 'react'
import TodoForm from '../TodoList/TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


export default function Todo(Todos,completeTodo,removeTodo,updateTodo) {
    const [edit,setEdit]= useState({
        id:null,
        value:''
    })
    const submitUpdate = value=>{
       updateTodo(edit.id,value)
       setEdit({id:null,value:''})
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return Todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row complete' :'todo-row'}
        key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)} >
               {todo.text}
            </div>
                <div className="icon">
                    <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
                    className="delete-icon"
                    />
                    <TiEdit
                    onClick={()=>setEdit({id:todo.id,value:todo.text})}
                    className="edit-icon"
                    />
                   
                </div>
        </div>
    ))
}
