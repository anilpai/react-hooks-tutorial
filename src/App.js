import React, { useState, useRef} from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure }from "./useMeasure"

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const inputRef = useRef();

  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowHello(!showHello);
          }}
        >
          toggle
        </button>
        {showHello && <Hello />}

        <input
          ref={inputRef}
          name="email"
          value={values.email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name="firstName"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
        <pre>
          {JSON.stringify(rect, null, 2)}
        </pre>
      </div>
    </>
  );
}

export default App;
