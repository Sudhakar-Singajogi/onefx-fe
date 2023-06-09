
import '../App.css'
import {useRef} from "react"
import {addTodo, deleteTodo} from "../reducx/slices/IncDec"
import {useDispatch, useSelector} from "react-redux"

function ToDoList() { 
  const dispatch = useDispatch();
  const {todolists} = useSelector((state)=>state.todo_list)
  const todoItem = useRef()

  console.log('todoList:', todolists);
  const handleAddTodo = () => {
    const newTodo = {
      "name":todoItem.current.value,
      "id":Date.now(),
    };
    todoItem.current.value = "";
    todoItem.current.focus();
    
    dispatch(addTodo(newTodo))
  }

  const handleDelete = (taskid) => {
    console.log('taskId:', taskid)
    dispatch(deleteTodo(taskid))
  }

  return (
    <>
      <div>
        <label style={{marginRight:'5px'}}>Enter A Todo List: </label>
        <input type='text' ref={todoItem}  /> <input type='button' value="Add to list" onClick={()=> handleAddTodo()}   /> 
        <ul style={{padding:'0px', listStyle:'none'}}>
        {
          todolists.length>0 && ( 
            todolists.map(list => <li style={{padding:'10px'}} key={list.id} >{list.name} <button onClick={()=>handleDelete(list.id)} style={{background:"#eee"}}>X</button></li> ) 
          )
          
        }
        </ul>
       </div>
    </>
  )
}

export default ToDoList
