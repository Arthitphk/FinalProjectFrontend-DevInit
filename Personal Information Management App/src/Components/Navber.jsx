import React, { useState } from 'react'
import Theme from './Theme';


const Navber = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

  return (
    <nav className="p-4  bg-white dark:bg-gray-800 drop-shadow-lg">
        <div className="flex  justify-between container mx-auto">
            <div className="text-black text-2xl font-bold dark:text-white ">My
            <span className="text-red-500">App</span>
            </div>

            <div className="md:hidden">
            <button id="menu-toggle" className="dark:text-white">
                    <svg  
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    viewBox=" 0 0 24 24"
                    className="w-6 h-6"
                    onClick={toggle}
                    >
                    <path d="M4 6H16M4 12h16M4 18h16"></path>
                    </svg>
            </button>
            </div>


            <ul className="hidden md:flex space-x-4">
                <li><a href="/Home" className="text-black font-bold dark:text-white">Home</a></li>
                <li><a href="/Todo" className="text-black font-bold dark:text-white">Todo-List</a></li>
                <li><a href="/Note" className="text-black font-bold dark:text-white">Note</a></li>
                <Theme />
            </ul>
        </div>

        {open ? (
          <ul className="flex-col md:hidden">
            <li className="py-3"><a href="/Home" className="text-black font-bold dark:text-white">Home</a></li>
            <li className="py-3"><a href="/Todo" className="text-black font-bold dark:text-white">Todo-List</a></li>
            <li className="py-3"><a href="/Note" className="text-black font-bold dark:text-white">Note</a></li>
        </ul>
        ) : null}
  </nav>
  )
}

export default Navber