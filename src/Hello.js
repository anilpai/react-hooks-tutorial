import React, {useRef} from "react"

export const Hello = () => {
    const renders = useRef(0)

    console.log("hello component renders: ", renders.current++)

    return <div>Hello Component</div>
}