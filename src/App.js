import React, {useState} from 'react'
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"

function App() {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''})

  const [count, setCount] = useState(0)
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

  return (
    <>
      <div>{loading ? "loading......" : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default App;
