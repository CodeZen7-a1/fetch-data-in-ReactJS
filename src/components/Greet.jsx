import React, {useEffect} from 'react'

function Greet() {
    useEffect(() => {
        console.log("Component Mounted");
    }, [])
    return (
        <h1>Hello World</h1>
    )

    
}

export default Greet