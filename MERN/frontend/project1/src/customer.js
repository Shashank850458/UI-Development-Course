import { useState,useEffect } from "react";

const Mycustomer = () => {
    let[allcustomer,updatecustomer] =useState([]);
    let[details,updatedetails] = useState({});

    const getCustomer = () =>{
        fetch("http://localhost:1111/customer")
        .then(response => response.json())
        .then(customerArray =>{
            updatecustomer(customerArray);
            updatedetails(customerArray[0]);  // onload it will print 1st customer details
        }) 
    }
    useEffect(()=>{
        getCustomer();
    },[1]);

    return(
        <div className="container">
            <h1> Manage Customer:{allcustomer.length}</h1>
            <table>
                <tr valign="top">
                    <td>
                    <ul id="leftnav">
                        {
                            allcustomer.map((customer,index)=>{
                                return (
                                    <li key={index} onClick={updatedetails.bind(this,customer)}>
                                    {customer.name}</li>
                                    
                                )
                            })
                        }
                        </ul>
                    </td>
                    <td id="userinfo">
                        <div>Full Name:{details.name}</div>
                        <div>Mobile No:{details.mobile}</div>
                        <div>Age:{details.age}</div>
                        <div>City:{details.city}</div>
                        <div>Education:{details.edu}</div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Mycustomer;