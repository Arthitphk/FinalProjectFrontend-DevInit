import React from 'react'
import  Calendarapp from '../Components/Calendarapp'
import Navber from '../Components/Navber'



const Calendar = () => {
  return (
    <div>
        <Navber />
        <div className='container mx-auto mt-16'>
            <Calendarapp/>
        </div>
    </div>
  )
}

export default Calendar