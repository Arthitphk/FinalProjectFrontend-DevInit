import React from 'react'
import Navber from '../Components/Navber'
import Calendarapp from '../Components/Calendarapp'
import Note from './Note'

const Home = () => {
  return (
    <div>
      <Navber/>
      <div className='container mx-auto mt-[50px]'>
        <Calendarapp />
      </div>
    </div>
    
  )
}

export default Home