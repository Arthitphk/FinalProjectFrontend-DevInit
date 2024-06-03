import React from 'react'
import NoteItem from './NoteItem'


const NoteList = ({ notetasks, deleteNote }) => {
  return (
    <div className='grid  xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 container mx-auto '>
        { notetasks.map(notetask => ( 
          <NoteItem key={notetask.id} notetask={notetask} deleteNote={deleteNote}/>
        ))}
    </div>
  )
}

export default NoteList