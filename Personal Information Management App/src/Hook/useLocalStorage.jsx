import { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultvalue) => {
    const [value, setValue] = useState(() => {
      try {
        const localValue = window.localStorage.getItem(key);
        return localValue ? JSON.parse(localValue) : defaultvalue;
      } catch (err) {
        console.log(err);
        return defaultvalue
      }
      
    })
    
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

 
    return [value, setValue]
  
}

export default useLocalStorage