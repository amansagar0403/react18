import React from "react";
import { ReactDOM } from "react";


function Greeting(){
    return <h2>My First component</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting></Greeting>)