import { useState,useEffect } from "react";
const ViewMyProfile =() =>{
    let[userinfo,updateInfo] = useState(
           {

                "name": "Loading...",
                "email": "Loading...",
                "password": "Loading...",
                "type": "Loading...",
                "city": "Loading...",
                "address": "Loading...",
                "id": ""
            }
           
        );

        const getinfo = () =>{
            let userid =  localStorage.getItem("id"); // login user id take from localstorage
            fetch("http://localhost:1234/account/"+userid)
            .then(response=>response.json())
            .then(userdata=>{
                updateInfo(userdata);
            })
        }
    
        useEffect(()=>{
            getinfo();
        },[1]);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <i className="fa fa-eye"></i><b> View Profile</b>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <b>Full Name</b>
                                <p>{userinfo.name}</p>
                            </div>
                            <div className="mb-3">
                                <b>e-mail Id</b>
                               <p>{userinfo.email}</p>
                            </div>
                            <div className="mb-3">
                                <b>Password</b>
                                <p>{userinfo.password}</p>
                            </div>
                            <div className="mb-3">
                                <b>City Name</b>
                               <p>{userinfo.city}</p>
                            </div>
                            <div className="mb-3">
                                <b>Full Address</b>
                                <p>{userinfo.address}</p>
                            </div>
                        </div>


                      
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}

export default ViewMyProfile;