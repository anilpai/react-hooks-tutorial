import React from 'react'
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"

function App() {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''})

  const {data, loading} = useFetch("http://numbersapi.com/43/trivia")

  return (
    <>
    <div>
      {loading ? "loading......": data }
    </div>
    <div>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
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
