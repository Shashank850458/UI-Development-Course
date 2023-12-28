import { useState } from "react";

const Myemail =() =>{
    let[toemail,pickEmail] =useState("");
    let[subject,pickSubject] =useState("");
    let[message,pickMessage] =useState("");

    const sendEmail= () =>{
        let url ="http://localhost:1111/sendmyemail";
        let input={email:toemail, subject:subject,message:message};
        let postData ={
            headers:{'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(input)
        }
        fetch(url, postData)
        .then(response => response.text())
        .then(statusMessage=>{
            alert(statusMessage);
        })
    }
    return (
        <div className="container">
            <h1 align="center">Email Sending</h1>
            <div>Enter To Email : <input type="text" onChange={obj=>pickEmail(obj.target.value)}/></div>
            <div>Enter Subject : <input type="text" onChange={obj=>pickSubject(obj.target.value)}/></div>
            <div>Enter Message :</div>
            <div><textarea rows="10" cols="50" onChange={obj=>pickMessage(obj.target.value)}></textarea></div>
            <div>
                <button onClick={sendEmail}> Send Email</button>
            </div>
        </div>
    )
} 

export default Myemail;