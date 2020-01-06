import React, {useState} from 'react'

function App() {
  const [{count1, count2 }, setCount] = useState({ count1: 10, count2: 20})

  return (
    <div>
      <button
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count1: currentState.count1 + 1
          }))
        }
      >
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
}

export default App;
