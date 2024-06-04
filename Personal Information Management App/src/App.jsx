import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Todo from './Pages/Todo'
import Note from './Pages/Note'
import Calendar from './Pages/Calendar'

function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Todo' element={<Todo/>} />
            <Route path='/Note' element={<Note/>} />
            <Route path='/Calendar' element={<Calendar/>} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}




export default App
