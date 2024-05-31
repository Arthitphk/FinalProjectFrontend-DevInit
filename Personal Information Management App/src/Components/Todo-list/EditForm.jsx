import React, { useState } from 'react'



const EditForm = ({ editTask, updateTask }) => {

    const [updatetaskname, setUpdateTaskName] = useState(editTask.name);


    const handleFormSumit = (e) => {
        e.preventDefault();
        updateTask({...editTask, name: updatetaskname});
    }


  return (
    <div  role='dialog' aria-labelledby={editTask}  className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-4 md:p-5">
                    <form className="space-y-4" onSubmit={handleFormSumit}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name:</label>
                            <input type="text"  id='task'
                                value={updatetaskname}
                                onInput={(e) => setUpdateTaskName(e.target.value)}
                                required
                                autoFocus
                                maxLength={50}
                                placeholder='Update Task' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default EditForm