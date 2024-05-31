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
        <Todowrapper/>
      </main>
    </div>

  )
}

export default Todo