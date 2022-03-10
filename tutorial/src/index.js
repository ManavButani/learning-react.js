import React from 'react'
import ReactDOM from 'react-dom'

function Greeting(){// this is react component becasue Greeting G is capital letter
    return <h2>Jai Swaminarayan </h2> // this is not html but it is JSX
}

ReactDOM.render(<Greeting/>,document.getElementById("root"))