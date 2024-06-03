import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Calendarapp = () => {

  const [event, setEvent] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [slectedDate, setSlectedDate] = useState(null)
  const [eventName, setEventName] = useState("")

  const handleSelect = (slotinfo) => {
    setShowModal(true);
    setSlectedDate(slotinfo.start);
  }

  const SaveEvent = () => {
    if(eventName && slectedDate) {
      const newEvent = {
        title: eventName,
        start: slectedDate,
        end: moment(slectedDate).add(1, 'hour').toDate(),
      };
      setEvent(prevEvent => [...prevEvent, newEvent]);
      setShowModal(false);
      setEventName("");
    }
  }



  return (
    <div>
      <Calendar
          localizer={localizer}
          events={event}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(80vh - 80px)', width: '100%'}}
          selectable={true}
          onSelectSlot={handleSelect}
          
      />
      {showModal && (
            <div  className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
              <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="p-4 md:p-5">
                          <form className="space-y-4" action="#">
                              <div>
                                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name:</label>
                                  <input type="text" id='eventName' value={eventName} onChange={(e) => setEventName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>
                              <button type="submit" onClick={SaveEvent} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                          </form>
                      </div>
                  </div>
              </div>
        </div> 
      )}
    </div>
  )
}

export default Calendarapp