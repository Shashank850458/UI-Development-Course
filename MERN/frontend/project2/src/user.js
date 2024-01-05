import { useState,useEffect } from "react";

const Myuser = () => {
    let [userlist,updateUser] = useState([]);
    const getuser =() =>{
        fetch("http://localhost:2222/myuser")
        .then(response => response.json())
        .then(userArray=>{
            updateUser(userArray.reverse());
        })

    }

    useEffect(()=>{
        getuser();
    },[1]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage User :{userlist.length}</h3>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-3">
                    
                </div>
                <div className="col-lg-9">
                   <table className="table">
                      <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Mobile</th>
                            <th>Email Id</th>
                            <th>Full Address</th>
                            <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                            userlist.map((user, index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{user.fullname}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>-------</td>
                                    </tr>
                                )
                            })
                          }
                      </tbody>
                   </table>
                </div>
            </div>
        </div>
    )
}

export default Myuser;