import React from 'react'
import Navber from '../Components/Navber'
import Todowrapper from '../Components/Todo-list/Todowrapper'


const Todo = () => {


  return (

    <div>
      <header>
        <Navber/>
      </header>
      <main>
        <div>
          <h1 className='font-bold text-[40px] text-center m-10'>To-Do List</h1>
          <Todowrapper/>
        </div>
      </main>
    </div>

  )
}

export default Todo