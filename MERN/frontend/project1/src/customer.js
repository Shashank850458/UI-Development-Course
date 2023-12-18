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
        <div>
            <h1> Manage Customer:{allcustomer.length}</h1>
            <table border="1" cellspacing="0" cellpadding="20" width="100%">
                <tr valign="top">
                    <td width="30%">
                        {
                            allcustomer.map((customer,index)=>{
                                return (
                                    <p key={index} onClick={updatedetails.bind(this,customer)}>
                                    {customer.name}</p>
                                    
                                )
                            })
                        }
                    </td>
                    <td width="70%">
                        <p>Full Name:{details.name}</p>
                        <p>Mobile No:{details.mobile}</p>
                        <p>Age:{details.age}</p>
                        <p>City:{details.city}</p>
                        <p>Education:{details.edu}</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Mycustomer;