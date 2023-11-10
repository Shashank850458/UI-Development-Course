import { useState } from "react";
import swal from "sweetalert";

const Myhook4 =()=>{

    let[message,updateMessage] =useState("No Message Yet");
    let [allmessage,saveMessage] = useState(['Hi','Hello']);

    const save=()=>{
       saveMessage(allmessage =[...allmessage,message]); // a=a+b
       swal("message","Saved Successfully","success");
       updateMessage(""); // empty to message variable
    }

    // a=a-b;
    const deleteMessage=(index)=>{
        allmessage.splice(index, 1);
        saveMessage(allmessage =[...allmessage]); //a=a;
        swal("Message","Deleted Successfully","success");
    }
     return(
        <div>
            <h1> Input & Output</h1>
            <textarea 
            row="4" cols="40" 
            onChange={obj=>updateMessage(obj.target.value) }
            value={message}>
            </textarea>
            <p><button onClick={save}>Save</button></p>
            {
                allmessage.map((msg,index)=>{
                   return (
                      <p key={index} className="four">
                        {msg}
                        <br/>
                        <button onClick={deleteMessage.bind(this,index)}>Delete</button> 
                      </p>
                    )
                })
            }
        </div>
        
     )
}
export default Myhook4;