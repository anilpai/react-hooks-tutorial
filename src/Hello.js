import React, {useState, useEffect, useRef, useLayoutEffect} from "react"
import { useFetch } from "./useFetch"

export const Hello = () => {

    const [count, setCount] = useState(() => {
        return JSON.parse(localStorage.getItem("count")) || 0;
    });

        
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const [rect, setRect] = useState({})
    const divRef = useRef();

    useLayoutEffect(()=> {
        setRect(divRef.current.getBoundingClientRect())
    }, [data])

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div ref={divRef}>{loading ? "loading......" : data}</div>
        </div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)}>-</button>
      </div>
    );
}