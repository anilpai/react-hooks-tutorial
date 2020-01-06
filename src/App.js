import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(10)
  const [count2, setCount2] = useState(20)

  return (
    <div>
      <button
        onClick={() =>{
          setCount(c => c+1 )
          setCount2(c => c+1 )
        }}>
        +
      </button>
      <div>{count}</div>
      <div>{count2}</div>
    </div>
  );
}

export default App;
