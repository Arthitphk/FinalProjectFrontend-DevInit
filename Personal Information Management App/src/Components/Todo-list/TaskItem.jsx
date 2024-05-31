
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


const TaskItem = ({ task, deleteTask, enterEditMode }) => {
  return (
    <li className="flex items-center mt-5 justify-between gap-[.6em] text-lg border-2 border-black rounded-lg">
        <div className='p-5 relative'>
            <label htmlFor={task.id} className="ml-5">
              {task.name}
            </label>
        </div>

        <div className='p-5'>
            <button  onClick={() => enterEditMode(task)} className='hover:text-red-700 p-3 bg-black mr-5 text-white rounded-lg'>
              <BorderColorIcon  width={24} height={24} />
            </button>

            <button onClick={() => deleteTask(task.id)}  className=' p-3 bg-red-700 text-white rounded-lg'>
              <DeleteIcon  width={24} height={24} />
            </button>
        </div>
   </li>
  )
   
}



export default TaskItem