import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("Count is",{count})
    },[count])
  return (
    <div>
    <div>COUNTER:{count}</div>
    <button onClick={()=>{setCount(count+1)}}> Increment</button>
    </div>
  )
}

export default Counter