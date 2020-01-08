import React, {useState, useEffect} from 'react'
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"

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
        <input name="email" value={values.email} placeholder="Email address" onChange={handleChange} />
        <input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default App
