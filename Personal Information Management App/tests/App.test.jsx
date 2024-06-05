import { render, screen } from '@testing-library/react'

import Home from '../src/Pages/Home'
import Todo from '../src/Pages/Todo'
import Note from '../src/Pages/Note'
import Calendar from '../src/Pages/Calendar'


describe('Home ', () => {
    it('renders the Home  component', () => {
      render(<Home  />)
      
      screen.debug(); 
    })
})


describe('Todo ', () => {
  it('renders the Todo  component', () => {
    render(<Todo  />)
    
    screen.debug(); 
  })
})


describe('Note ', () => {
  it('renders the Note  component', () => {
    render(<Note  />)
    
    screen.debug(); 
  })
})

describe('Calendar ', () => {
  it('renders the Calendar component', () => {
    render(<Calendar  />)
    
    screen.debug(); 
  })
})


