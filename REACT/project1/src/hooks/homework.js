import { useState } from "react";

const Myhome=()=>{
    let[message,updateMessage] =useState("");
    let [allmessage,saveMessage] = useState([]);

    let[message1,updateMessage1] =useState("");
    let [allmessage1,saveMessage1] = useState([]);

    const save=()=>{
        saveMessage(allmessage =[...allmessage,message]); // a=a+b
       
      
     }
     const save1=()=>{
        saveMessage1(allmessage1 =[...allmessage1,message1]); // a=a+b
        
       
     }

     return(
        <>
        <div className="inline">
            <input type="text" size="10" classname="inline"
            onChange={obj=>updateMessage(obj.target.value) }
            value={message}>
            </input>
            <p className="btn"><button onClick={save}>Save</button></p>
            {
                allmessage.map((msg,index)=>{
                   return (
                      <p key={index}>
                        {msg}-
                        {msg.length}
                      </p>
                    )
                })
            }
        </div>

         <div className="inline1">
            <input type="text"
            onChange={obj=>updateMessage1(obj.target.value) }
            value={message1}>
            </input>
            <p className="btn"><button onClick={save1}>Save</button></p>
            <br/>
            {
                allmessage1.map((msg,index)=>{
                   return (
                    <p key={index} className="save1">
                        {index}
                        <br/>
                        {msg}
                        <br/>
                        {msg.length}
                      </p>
                    )
                })
            }
        </div>
        </>
     )
}
export default Myhome;