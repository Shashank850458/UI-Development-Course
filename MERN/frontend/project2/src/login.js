import { useState } from "react";

const Mylogin =() =>{
    let[email,pickEmail] =useState("");
    let[password,pickPassword] =useState("");

    const Gologin =() =>{
        let url= "http://localhost:2222/login";
        let userdata={email:email,password:password};
        let postdata={
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(userdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(logininfo =>{
            if(logininfo == null)
            {
                alert("Invalid or Not Exists !");
            }else{
                localStorage.setItem("token",logininfo._id);
                localStorage.setItem("name",logininfo._fullname);
                window.location.reload(); //to refresh the current page if login success
            }
        })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h3 className="text-center text-danger">Login</h3>
                    <div className="mb-4">
                        <label>Email Id</label>
                        <input type="text" className="form-control"
                            onChange={obj=>pickEmail(obj.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input type="password" className="form-control"
                             onChange={obj=>pickPassword(obj.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger" onClick={Gologin}>Login</button>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}
export default Mylogin;