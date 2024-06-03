import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = ({ notetask, deleteNote }) => {
  return (
    <div className="container mx-auto ">
        <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center  gap-4 px-4">
            <div >
                <span htmlFor={notetask.id} className="font-medium text-lg text-orange-900">{notetask.title}</span>
                <button onClick={() => deleteNote (notetask.id)} className="flex justify-center items-center bg-orange-700 hover:bg-orange-800 pl-4 pr-4 pt-1.5 pb-1.5 mt-4 rounded-md text-white font-medium">
                    <span className="mr-2">Delete</span>
                    <DeleteIcon/>
                </button>
            </div>
            
        </div>
   </div>
  )
}

export default NoteItem