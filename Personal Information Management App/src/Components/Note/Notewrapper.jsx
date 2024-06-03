import React, { useState } from 'react'
import Noteform from './Noteform'
import NoteList from './NoteList';
import useNoteStorage from '../../Hook/useNoteStorage'

const Notewrapper = () => {
  const [notetasks, setNoteTasks] = useNoteStorage('react-note',[]);

  const addNote = (notetask) => {
    setNoteTasks(prevNote => [...prevNote, notetask])
  }

  const deleteNote = (id) => {
    setNoteTasks(prevNote  =>prevNote.filter(t => t.id != id));
  }
  


  return (
    <div>
        <Noteform addNote={addNote}/>
        {notetasks && <NoteList notetasks={notetasks} deleteNote={deleteNote}/>}
    </div>
  )
}

export default Notewrapper