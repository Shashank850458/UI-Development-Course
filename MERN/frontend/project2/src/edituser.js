import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const EditUser = () =>{
    const {id}= useParams();

    let[fullname, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[address, pickAddress] = useState("");

    const getdetails = () =>{
        let url = "http://localhost:2222/myuser/"+id;
        fetch(url)
        .then(response => response.json())
        .then(userinfo=>{
            pickName(userinfo.fullname);
            pickMobile(userinfo.mobile);
            pickEmail(userinfo.email);
            pickAddress(userinfo.address);
        })
    }
    useEffect(()=>{
        getdetails();
    },[1]);
    
    const save = () =>{
        let url = "http://localhost:2222/myuser";
        let newuser = {
            "n":fullname,
            "e":email,
            "m":mobile,
            "a":address,
            "id":id
        };
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(newuser)
        }

        fetch(url, postdata)
        .then(response =>response.json())
        .then(serverdata=>{
            alert(serverdata.msg);
            pickName("");
            pickMobile("");
            pickEmail("");
            pickAddress("");
            
        })
    }

   

   
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className='border p-3'>
                        <h3 className='text-center mb-4'> Edit User Details </h3>
                        <div className='mb-3'>
                            <label> Full Name </label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickName( obj.target.value)} value={fullname}/>
                        </div>

                        <div className='mb-3'>
                            <label> Mobile No </label>
                            <input type="number" className='form-control'
                            onChange={obj=>pickMobile( obj.target.value)} value={mobile}/>
                        </div>

                        <div className='mb-3'>
                            <label> e-Mail </label>
                            <input type="email" className='form-control'
                            onChange={obj=>pickEmail( obj.target.value)} value={email}/>
                        </div>

                        <div className='mb-3'>
                            <label> Address </label>
                            <textarea className='form-control'
                            onChange={obj=>pickAddress( obj.target.value)} value={address}></textarea>
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={save}> Save User </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default EditUser;