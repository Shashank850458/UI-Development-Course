import { useState } from "react";

const Myhook3 =()=>{

    let[message,updateMessage] =useState("No Message Yet");
     return(
        <div>
        <h1> Howto create input from input elements</h1>
        <textarea row="10" cols="70" onChange={obj=>updateMessage(obj.target.value) }></textarea>
        <p>{message}</p>
        </div>
        
     )
}
export default Myhook3;