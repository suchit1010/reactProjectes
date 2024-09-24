import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const maxvalue = 10;

  const addvalue = () => {
    if (count < maxvalue){
      setCount(count + 1);
    }
    
  }

  const removevalue = () => {
    if (count > 0){
      setCount(count - 1);
    }
    } 
    

  return (
    <>
    <h1> Count your number</h1>
      <button
       onClick={addvalue}
       > AddValue {count}</button>
       <br />
       <button onClick={removevalue}>Deceares value </button>
       <p> Footer: {count} </p>
    </>
  )
}

export default App
