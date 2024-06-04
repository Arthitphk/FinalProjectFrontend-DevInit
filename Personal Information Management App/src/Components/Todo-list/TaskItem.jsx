
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


const TaskItem = ({ task, deleteTask, enterEditMode }) => {
  return (
    <li className="flex items-center mt-5 justify-between gap-[.6em] text-lg border-2 border-black dark:border-white rounded-lg dark:bg-white" >
        <div className='p-5 relative'>
            <label htmlFor={task.id} className="ml-5">
              {task.name}
            </label>
        </div>

        <div className='p-5 flex gap-2'>
            <button  onClick={() => enterEditMode(task)} className='flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#5e5557] via-[#020101] to-[#5e5557] hover:shadow-xl hover:shadow-gray-600 hover:scale-105 duration-300 hover:from-[#5e5557] hover:to-[#5e5557]'>
              <BorderColorIcon  width={24} height={24} />
            </button>

            <button onClick={() => deleteTask(task.id)}  className=' flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]'>
              <DeleteIcon  width={24} height={24} />
            </button>
        </div>
   </li>
  )
   
}



export default TaskItem