import { useState } from "react"


function App() {

  const [count,setCount] = useState(0)

  function increase(){
   setCount(count + 1)
  }

  const decrease = () =>{
    setCount(count - 1)
  }


  return (
    <div>
      <h1>Smart Counter</h1>
      <h2>count : {count}</h2>
      { count > 10 && <p>Too High 🚀</p> }
      { count < 0 && <p style={{color:"red"}}>Negative 😬</p> }
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

    </div>
  )
}

export default App
