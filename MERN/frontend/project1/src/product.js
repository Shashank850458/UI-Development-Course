import { useState,useEffect } from "react";

const Myproduct =() => {
    let[allproduct,updateProduct]=useState([]);
    const getProduct =()=>{
        fetch("http://localhost:1111/productlist")
        .then(response=>response.json())
        .then(cityArray=>{
            updateProduct(cityArray);
        })
    }

    useEffect(()=>{
       getProduct();
    },[1]);
    return(
        <div className="container">
            <h1> Manage Product:{allproduct.length}</h1>
            {
                allproduct.map((productname,index)=>{
                    return (
                        <p key={index}>{productname}</p>
                    )
                })
            }        
            </div>
    )
}
export default Myproduct;