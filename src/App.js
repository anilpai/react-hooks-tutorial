import React, {useState, useEffect, useRef} from 'react'
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"
import { Hello } from "./Hello"

function App() {
  const [values, handleChange] = useForm({
    email: '', 
    password: '', 
    firstName: ''
  })

  //const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [count, setCount] = useState(()=>{
      return JSON.parse(localStorage.getItem("count")) || 0
  })
  
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  const inputRef = useRef()

  const [showHello, setShowHello] = useState(true)

  useEffect(()=> {
    localStorage.setItem("count", JSON.stringify(count))
  },[count])

  return (
    <>
      <div>{loading ? "loading......" : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <div>

        <button onClick={()=>{
          setShowHello(!showHello)
        }}>toggle</button>
        {showHello && <Hello />}

        <input ref={inputRef} name="email" value={values.email} placeholder="Email address" onChange={handleChange} />
        <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={()=> {
            console.log(inputRef.current)
          }}
        >focus</button>
      </div>
    </>
  )
}

export default App
