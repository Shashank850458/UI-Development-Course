import { useState } from "react";

const Myhook1 =() => {
    let city=["Banglore","Pune"];
    const[x,y] =city;

    console.log(useState()); // [undefined,f()];
    let [a,b] =useState(200);

    const one=() =>{
       b( a + 1 );
    }

    return (
        <div>
            <h1> What is UseState() ? How to use it?</h1>
             <p>{y}</p>
             <p>{x}</p>
             <p>{a}</p>
             <h2> How to change a value of state variable.</h2>
             <button onClick={ one }>Click Me</button>
        </div>
    )
}
export default Myhook1;
