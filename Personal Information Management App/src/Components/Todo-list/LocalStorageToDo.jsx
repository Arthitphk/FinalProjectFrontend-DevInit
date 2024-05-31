import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';

const LocalStorageToDo = () => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        const saveTask = JSON.parse(localStorage.getItem('task')) || [];
        setTask(saveTask)
    }, []);


    const addtask = (task) => {
        const newTask = (prevState => [...prevState, task])
        setTask(newTask);
        localStorage.setItem('task', JSON.stringify(newTask));
    }


    const deleteTask = (id) => {
        const newTask = (prevState => prevState.filter(t => t.id != id));
        setTask(newTask);
        ocalStorage.setItem('task', JSON.stringify(newTask));
    }
    

  return (
    <div>o</div>
  )
}

export default LocalStorageToDo