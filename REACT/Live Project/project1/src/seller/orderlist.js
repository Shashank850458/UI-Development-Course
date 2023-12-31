import { useState,useEffect} from "react";

const Myorder =() =>{
    let[allorder,updateOrder] =useState([]); // add this line

    const getOrder=() =>{
        fetch("http://localhost:1234/order")
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    },[1]);
    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="text-primary">Order Management : {allorder.length}</h3>
                </div>
            </div>
            {
                allorder.map((order,index)=>{
                    return(
                        <div className="row mt-5 mb-5 p-4 shadow-lg" key={index}>
                            <div className="col-lg-4">
                                <h4>{order.customer}</h4>
                                <p>{order.mobile}</p>
                                <p>{order.email}</p>
                                <p>{order.address}</p>
                            </div>
                            <div className="col-lg-8">
                                {
                                    order.itemlist.map((item, index2)=>{
                                        return(
                                            <div className="row border-bottom" key={index2}>
                                                <div className="col-lg-2">{item.name}</div>
                                                <div className="col-lg-2">{item.price}</div>
                                                <div className="col-lg-2">{item.qty}</div>
                                                <div className="col-lg-2">{item.price * item.qty}</div>
                                                <div className="col-lg-2">
                                                <img src={item.photo} height="50" width="50" /></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myorder;