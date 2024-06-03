import { useEffect, useState } from 'react'

const useNoteStorage = (key, defaulNotetvalue) => {
    const [value, setValue] = useState(() => {
      try {
        const localValue = window.localStorage.getItem(key);
        return localValue ? JSON.parse(localValue) : defaulNotetvalue;
      } catch (err) {
        console.log(err);
        return defaulNotetvalue
      }
      
    })
    
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

 
    return [value, setValue]
  
}

export default useNoteStorage