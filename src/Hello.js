import React, {useState, useEffect} from "react"
import { useFetch } from "./useFetch"

export const Hello = () => {

    const [count, setCount] = useState(() => {
        return JSON.parse(localStorage.getItem("count")) || 0;
    });

        
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    return (
      <div>
        {" "}
        <div>{loading ? "loading......" : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)}>-</button>
      </div>
    );
}