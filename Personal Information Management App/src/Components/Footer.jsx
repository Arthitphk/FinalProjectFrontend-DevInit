import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white rounded-lg  dark:bg-gray-900  mt-[20rem]">
            <div className="w-full container mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img  src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-4.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" className="h-8 rounded-xl" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My<span className="text-red-500">App</span></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">ToDo-List</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Note</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Calendar </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer