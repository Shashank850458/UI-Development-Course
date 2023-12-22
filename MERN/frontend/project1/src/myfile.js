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
            pickMessage("");
            getdata(); // to reload the list
        })

        

    }
    let[filedata,updateFiledata] = useState([]);
        const getdata =() => {
            let url= "http://localhost:1111/messagedata";
            fetch(url)
            .then(response => response.text())
            .then(data =>{
                updateFiledata( data.split("#") );
            })
        }
        useEffect(()=>{
            getdata();
        },[1]);
    return (
        <div className="container">
             <h1>File Read And Write Example</h1>
             <textarea cols="150" rows="10" 
             placeholder="Enter Your Message"
             onChange={obj=>pickMessage(obj.target.value)} value={newmsg}></textarea>

             <br/><br/>
             <button onClick={save}> Send Message</button>
             <h2>Total Message:{filedata.length-1}</h2>
             {
                filedata.map((msg,index)=>{
                    return (
                        <div key={index}> {msg}</div>
                    )
                })
             }
        
        </div>
    )
}

export default Myfile;