import React, {useState, useRef} from 'react'
import { useForm } from "./useForm"
import { Hello } from "./Hello"

function App() {
  const [values, handleChange] = useForm({
    email: '', 
    password: '', 
    firstName: ''
  })

  const inputRef = useRef()

  const [showHello, setShowHello] = useState(true)

  return (
    <>
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
