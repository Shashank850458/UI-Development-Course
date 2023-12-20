import { useState, useEffect } from 'react';

const Myfile =() =>{
    let[newmsg,pickMessage] = useState("");

    const save=() =>{
        let url ="http://localhost:1111/savemessage";
        let message ={mymsg:newmsg};

        let postdata={
            headers: {'Content-Type': 'application/json'},
            method:'POST',
            body: JSON.stringify(message)
        }
        fetch(url,postdata)
        .then(response =>response.text())
        .then(servermsg=>{
            alert(servermsg);
        })

    }
    return (
        <div className="container">
             <h1>File Read And Write Example</h1>
             <textarea cols="150" rows="10" 
             placeholder="Enter Your Message"
             onChange={obj=>pickMessage(obj.target.value)}></textarea>

             <br/><br/>
             <button onClick={save}> Send Message</button>
        </div>
    )
}

export default Myfile;