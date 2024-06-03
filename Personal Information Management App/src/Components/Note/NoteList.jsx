import React from 'react'
import NoteItem from './NoteItem'


const NoteList = ({ notetasks, deleteNote }) => {
  return (
    <div className='grid grid-cols-4 gap-4 container mx-auto'>
        { notetasks.map(notetask => ( 
          <NoteItem key={notetask.id} notetask={notetask} deleteNote={deleteNote}/>
        ))}
    </div>
  )
}

export default NoteList