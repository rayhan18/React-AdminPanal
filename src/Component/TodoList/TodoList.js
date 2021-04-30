import React,{useState} from 'react'
import TodoForm from '../TodoList/TodoForm'
import Todo from './Todo'

export default function TodoList() {

    const [todos,setTodos]=useState([''])

    const addTodo =todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos =[todo, ...todos]
        setTodos(newTodos)
        
    }
    const updeteTodo =(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev=>prev.map(item=>(item.id=== todoId ? newValue : item)))
    }
    const completeTodo=id=>{
        let updatetodos =todos.map(todo=>{
            if(todos.id===id){
                todo.isComplete= !todo.isComplete
            }
            return todo
        })
        setTodos(updatetodos)
    }
    const removeTodo=id=>{
        const removearr=[...todos].filter(todo=> todo.id !==id)
        setTodos(removearr)
    }
    return (
        <div>
            <h1>What's the plan today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updeteTodo={updeteTodo}
            />
        </div>
    )
}
