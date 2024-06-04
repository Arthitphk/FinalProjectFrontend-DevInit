import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddIcon from '@mui/icons-material/Add';


const Content = () => {
  return (
    
    <div className='container mx-auto mt-[12em]'>
        <div className="">
            <h1 className='p-6 font-bold dark:text-white text-[3rem]'>Your Management App</h1>
        </div>
       <div className='flex flex-row flex-wrap mt-[5rem] gap-[2rem]'>
            <div className="group relative cursor-pointer overflow-hidden bg-white dark:bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                           <ListAltIcon />
                        </span>
                         
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className='dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde animi minima quidem quaerat enim et, repellat facilis repudiandae nobis culpa non quisquam incidunt, quae ullam consectetur! Provident, recusandae nulla!</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <button className='flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'>
                                <a href='/Todo'>
                                <AddIcon/>
                                Add New List!
                                </a>
                            </button>
                        </div>
                    </div>
            </div>

            <div className="group relative cursor-pointer overflow-hidden bg-white dark:bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                           <NoteAddIcon/>
                        </span>    
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className='dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis beatae vel ullam minima id iure, magni sit nostrum laborum labore praesentium, veritatis, fugiat aliquam quae aperiam enim ipsa blanditiis.</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                        <button className='flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'>
                                <a href='/Note'>
                                <AddIcon/>
                                Add New Note!
                                </a>
                            </button>
                        </div>
                    </div>
            </div>

            <div className="group relative cursor-pointer overflow-hidden bg-white dark:bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                           <CalendarMonthIcon/>
                        </span>
                        <div
                            className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className='dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam laborum itaque perferendis, necessitatibus quia unde dignissimos provident et, ipsum esse voluptates numquam. Sapiente placeat fuga ab accusamus similique eius.</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                        <button className='flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed'>
                                <a href='/Calendar'>
                                <AddIcon/>
                                Add New Task!
                                </a>
                            </button>
                        </div>
                    </div>
            </div>
       </div>
    </div>
    
  )
}

export default Content