
import { useState,useEffect } from "react";

const Mycity=()=>{
    let[allcity,updateCity]=useState([]);
    const getCity =()=>{
        fetch("http://localhost:1111/citylist")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray);
        })
    }

    useEffect(()=>{
       getCity();
    },[1]);
    return (
        <div className="container">
            <h1> Manage City:{allcity.length}</h1>
            {
                allcity.map((cityname,index)=>{
                    return (
                        <p key={index}>{cityname}</p>
                    )
                })
            }
        </div>
    )
}

export default Mycity;