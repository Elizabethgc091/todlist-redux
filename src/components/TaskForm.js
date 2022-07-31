import React, {useState} from "react";
import {useDispatch}  from "react-redux";
import {addTask} from "../features/task/taskSlice";


export default function TaskForm() {
     const [task, setTask] = useState({
         title: "",
         description:""
     });
     //dispara eventos desde taskSlice
     const dispatch = useDispatch();


     function handlerChange (e){
         setTask({...task,
         [e.target.name]:e.target.value
         })
     }

     function handlerSubmit(e) {
         e.preventDefault();
         dispatch(addTask(task))


     }

     return(<div>
        <form onSubmit={handlerSubmit}>
            <input name='title' type="text" placeholder='title' onChange={handlerChange}/>
            <textarea name="description" placeholder='description' onChange={handlerChange} ></textarea>
            <button type="submit">Save</button>
        </form>
    </div>)
}