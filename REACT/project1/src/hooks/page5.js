import { useState } from "react";
import swal from "sweetalert";

const Myhook5 =() => {
    let[userlist,updateUser]= useState([
        {name: "Alex",mobile:33333333,city:"pune",pincode:55555555},
        {name:"Sunil",mobile:44444444,city:"Dehli",pincode:3333333}
    ]);

    let[fullname,pickName]=useState("");
    let[mobileno,pickMobile]=useState("");
    let[cityname,pickCity]=useState("");
    let[pincode,pickPincode]=useState("");

    const save =() =>{
       let newuser={name:fullname,mobile:mobileno,city:cityname,pincode:pincode};
       updateUser(userlist= [...userlist,newuser]);
       swal(fullname,"Save Successfully..","success");
       pickName("");
       pickMobile("");
       pickCity("");
       pickPincode("");
    }

    const deleteUser =(index) =>{
        userlist.splice(index,1); //element delete from array
        updateUser(userlist= [...userlist]); // available element update in state
        swal("User","Deleted Successfully..","success");
    }
    return(
     <div>
        <h1 align="center">Array of Objects,useState,spread operator[....]</h1>
        <p align="center">
             <input type="text" placeholder="Enter Name"
             onChange={obj=>pickName(obj.target.value)} value={fullname} />

            <input type="text" placeholder="Enter Mobile No"
             onChange={obj=>pickMobile(obj.target.value)} value={mobileno} />

            <input type="text" placeholder="Enter City Name"
             onChange={obj=>pickCity(obj.target.value)} value={cityname} />

             <input type="text" placeholder="Enter Pincode"
             onChange={obj=>pickPincode(obj.target.value)} value={pincode} />

            
            <button onClick={save}>Save</button>
        </p>
        <p align="center">Total Users: {userlist.length} </p>
        <table id="datalist" align="center">
        <thead>
            <tr>
                <th>S1 No</th>
                <th>Full Name</th>
                <th>Mobile Number</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Action</th>
            </tr>
            </thead>
           <tbody>
               {
                userlist.map((user,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.city}</td>
                            <td>{user.pincode}</td>
                            <td><button onClick={deleteUser.bind(this,index)}>Delete</button></td>
                        </tr>
                    )
                })
               }
           </tbody>
        </table>
     </div>
    )
}
export default Myhook5