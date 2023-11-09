import { useState } from "react";

const Myhook4 =()=>{

    let[message,updateMessage] =useState("No Message Yet");
    let [allmessage,saveMessage] = useState([]);

    const save=()=>{
       saveMessage(allmessage =[...allmessage,message]); // a=a+b
    }
     return(
        <div>
        <h1> Input & Output</h1>
        <textarea row="4" cols="40" onChange={obj=>updateMessage(obj.target.value) }></textarea>
        <p><button onClick={save}>Save</button></p>
        {
            allmessage.map((msg,index)=>{
                return (
                    <p key={index}>{msg}</p>
                )
            })
        }
        </div>
        
     )
}
export default Myhook4;