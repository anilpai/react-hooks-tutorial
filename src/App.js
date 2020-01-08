import React from 'react'
import { useForm } from "./useForm"
import { useFetch } from "./useFetch"

function App() {
  const [values, handleChange] = useForm({email: '', password: '', firstName: ''})

  useFetch("http://numbersapi.com/43/trivia")

  // useEffect(()=> {

  //   const onMouseMove = e => {
  //       console.log(e);
  //   }

  //   window.addEventListener("mousemove", onMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove)
  //   }

  // }, [])

  return (
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
  );
};

export default App;
