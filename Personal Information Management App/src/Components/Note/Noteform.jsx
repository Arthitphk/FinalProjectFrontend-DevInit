import React, { useState } from 'react'
import NoteAddIcon from '@mui/icons-material/NoteAdd';



const Noteform = ({ addNote }) => {
  const [notetask, setNoteTask] = useState("");
  const [modal, setModal] = useState(false);

  const handleNoteSumit = (e) => {
    e.preventDefault();
    addNote({
      title: notetask,
      id: Date.now()
    });
    setModal(false)
    setNoteTask("");
  }



  return (
    <div className='container mx-auto'>
      <div className='flex justify-center mt-10'>
          <div className=''>
            <h1 className='font-bold text-[100px]'>Daily Note</h1>
          </div>
          <div className=''>
            <button onClick={() => setModal(true)} className='cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none'>
                <NoteAddIcon/>
            </button>
          </div>
      </div>

      {modal  && (
          <div  className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleNoteSumit}>
                            <div>
                                <label htmlFor={notetask.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note Here</label>
                                <input type="text" value={notetask} onInput={(e) => setNoteTask(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        </form>
                    </div>
                </div>
            </div>
          </div> 
      )}
    </div>
  )
}

export default Noteform


