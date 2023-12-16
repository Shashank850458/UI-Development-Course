import { useState, useEffect } from "react";
import swal from "sweetalert";

const EditMyProfile = () =>{

    let[fullname, pickName] = useState("");// add this line
    let[emailid, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[city, pickCity] = useState("");
    let[address, pickAddress] = useState("");

    const getinfo = () =>{
        let userid =  localStorage.getItem("id"); // login user id take from localstorage
        fetch("http://localhost:1234/account/"+userid)
        .then(response=>response.json())
        .then(userdata=>{
            pickName(userdata.name); // add this line
            pickEmail(userdata.email);
            pickPassword(userdata.password);
            pickCity(userdata.city);
            pickAddress(userdata.address);
        })
    }

    useEffect(()=>{
        getinfo();
    },[1]);

    const updateProfile = () =>{
        let userid =  localStorage.getItem("id");
        let url = "http://localhost:1234/account/"+userid;
        let userinfo = {
            "name":fullname,
            "email":emailid,
            "password":password,
            "city":city,
            "address":address
        }

        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(userinfo)
        }

        fetch(url, postdata)
        .then(response=>response.json())
        .then(userdata=>{
            swal("Updated Successfully", "Hi, Your profile updated", "success");
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-edit"></i> <b>Edit Profile</b>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label> Full Name </label>
                                <input type="text" className="form-control" 
                                value={fullname} onChange={obj=>pickName(obj.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label> e-Mail Id </label>
                                <input type="email" className="form-control" 
                                value={emailid} onChange={obj=>pickEmail(obj.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label> Password </label>
                                <input type="password" className="form-control" 
                                value={password} onChange={obj=>pickPassword(obj.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label> City Name</label>
                                <input type="text" className="form-control" 
                                value={city} onChange={obj=>pickCity(obj.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label> Full Address </label>
                                <textarea className="form-control" 
                                value={address} onChange={obj=>pickAddress(obj.target.value)}></textarea>
                            </div>
                        </div>

                        <div className="card-footer text-center">
                            <button className="btn btn-danger" onClick={updateProfile}> Update Profile </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}   

export default EditMyProfile;