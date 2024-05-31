import React from 'react'
import { useState } from "react";
import CustomForm from './CustomForm';
import TaskList from './TaskList'
import EditForm from './EditForm';
import useLocalStoreage from '../../Hook/useLocalStoreage';


const Todowrapper = () => {

    const [tasks, setTasks] = useLocalStoreage('react-todo', []);
    const [editTask, setEditTask] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const addTask = (task) => {
        setTasks(prevState => [...prevState, task])
    }

    const deleteTask = (id) => {
      setTasks(prevState =>prevState.filter(t => t.id != id)); 
    }

    const updateTask = (task) => {
      setTasks(prevState => prevState.map(t => (
        t.id === task.id ? { ...t, name: task.name} : t
      )));
  
      closeEditMode();
    }

    const closeEditMode = () => {
      setIsEdit(false);
    }
  
  
    const enterEditMode = (task) => {
      setEditTask(task);
      setIsEdit(true);
    }
    


  return (
    <div className='container mx-auto '>
       <CustomForm addTask={addTask}/>
       {tasks && (<TaskList tasks={tasks} deleteTask={deleteTask}  enterEditMode={enterEditMode}/>)}
       {isEdit && (<EditForm editTask={editTask} updateTask={updateTask} />)}
    </div>
  )
}

export default Todowrapper 