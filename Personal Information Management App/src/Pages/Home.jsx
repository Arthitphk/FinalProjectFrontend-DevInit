import React from 'react'
import Navber from '../Components/Navber'
import Calendarapp from '../Components/Calendarapp'

const Home = () => {
  return (
    <div>
        <header>
            <Navber/>
        </header>

        <main className='container mx-auto mt-[5rem]'>
          <Calendarapp/>
        </main>
    </div>
  )
}

export default Home