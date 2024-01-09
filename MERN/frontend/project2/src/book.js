import { useState,useEffect } from "react";

const Mybook = () => {
    let[booklist, updateBook]=useState([]);
    const getbook = () =>{
        fetch("http://localhost:2222/mybook/")
        .then(response=>response.json())
        .then(userArray=>{
            updateBook(userArray.reverse());
        })
    }

    useEffect(()=>{
        getbook();
    },[1]);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage Book : {booklist.length}</h3>
                </div>
            </div>
        </div>
    )
}

export default Mybook;