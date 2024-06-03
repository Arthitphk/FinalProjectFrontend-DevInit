import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = ({ notetask, deleteNote }) => {
  return (
    <div className="container mx-auto m-2 ">
        <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center  gap-4 px-4">
            <div >
                <span htmlFor={notetask.id} className="font-medium text-lg text-orange-900">{notetask.title}</span>
                <button onClick={() => deleteNote (notetask.id)} className=" mt-10 flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                    <span className="mr-2">Delete</span>
                    <DeleteIcon/>
                </button>
            </div>
            
        </div>
   </div>
  )
}

export default NoteItem