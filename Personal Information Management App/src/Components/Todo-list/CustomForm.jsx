import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const CustomForm = ({ addTask }) => {
    const [task , setTask] = useState("");

    const handleFormSumit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            id: Date.now()
        })
        setTask("");
    }


  return (
    <form onSubmit={handleFormSumit}> 
        <div className='flex gap-4'>
        <input className="block w-full dark:bg-white rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 "  
           type="text"
           placeholder='Enter Task'
           value={task}
           onInput={(e) => setTask(e.target.value)}
        />

            <button
                className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition "
                aria-label="Add New"
                type='submit'
            >
                <ControlPointIcon className=" text-white"/>
            </button>
        </div>
    </form>
  )
}

export default CustomForm