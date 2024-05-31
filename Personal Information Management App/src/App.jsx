import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Todo from './Pages/Todo'

function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Todo' element={<Todo/>} />
        </Routes>
      </BrowserRouter>
   </div>
  )
}




export default App
