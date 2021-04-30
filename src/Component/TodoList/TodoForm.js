import React ,{ useState,useEffect,useRef } from 'react'
  // https://www.youtube.com/watch?v=E1E08i2UJ
function TodoForm(props) {
    const [input,setInput] =useState(props.edit ? props.edit.value : '')
      const handelChange =(e)=>{
          setInput(e.target.value)
      }
   const inputRef =useRef(null)
   useEffect(()=>{
       inputRef.current.focus()
   })
    const handelSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() *1000),
            text:input
        });
        setInput('')
    }
    
    return (
        <div>
            <form className="todoform" onSubmit={handelSubmit}>
                {props.edit ?(
                    <>
                     <input type="text"
                      placeholder='update your item' 
                      value={input} 
                      name='text'
                 className="todoInput"
                  onChange={handelChange}
                   ref={inputRef}/> 
                    <button className="todo-button">Add Todo</button>
                    </>
                    )
                  
               :
               (
             <> 
                <input type="text"
                placeholder='add todo' 
                value={input} 
                name='text'
           className="todo-input-edit"
            onChange={handelChange}
             ref={inputRef}/>
              <button className="todo-button">Add Todo</button>
            </>
                )}
               
            </form>
        </div>
    )
}

export default TodoForm
