import { useState } from "react";
import CounerDisplay from "./CounterDisplay";
import CounerButtons from "./CounterButtons";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Smart Counter</h1>
      <CounerDisplay count={count}/>
      <CounerButtons increase={increase} decrease={decrease}/>
    </div>
  );
}

export default App;
