import React from "react";
import ReactDOM from "react-dom";

// function Greeting(){
//     return (<h1>Hello World!</h1>)
// }

function Greeting() {
    return (React.createElement("h2", {}, "Hello World"))
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)