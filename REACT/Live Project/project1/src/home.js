import { useState, useEffect } from "react";

const Myhome =() =>{
    let[allproduct,updateProduct]=useState([]);

    const getproduct =() =>{
        fetch("http://localhost:1234/product")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse() );
        })
    }
    useEffect(()=>{
        getproduct();
    },[1]);
    return(
        <>
            <section id="banner"></section>
            <div className="container mt-5">
                <div className="row">
                    {
                        allproduct.map( (product,index)=>{
                            return (
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="p-4 shadow-lg rounded">
                                        <h3 className="text-center text-primary">{product.name}</h3>
                                        <img src={product.photo} height="150" width="100%" className="mt-2 mb-2"/>
                                        <p>{product.details}</p>
                                        <p>Rs. {product.price}</p>
                                        <p className="text-center">
                                            <button className="btn btn-danger btn-sm">
                                                <i className="fa fa-shopping-cart"></i> Add to Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Myhome;