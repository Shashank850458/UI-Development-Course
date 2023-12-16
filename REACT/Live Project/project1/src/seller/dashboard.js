import { useState,useEffect} from "react";

const Mydashboard =() =>{
    let[allproduct,updateProduct] =useState(0);
    let[allorder,updateOrder] =useState(0);
    return (
        <div className="container mt-5">

            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h3 className="text-primary">
                    Welcome, {localStorage.getItem("name")}. How Are You Today?
                    </h3>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-2"></div>

                <div className="col-lg-4">
                    <i className="fa fa-suitcase fa-4x text-warning"></i>
                    <h4>{allproduct} - Products in Store</h4>
                </div>
                <div className="col-lg-4">
                     <i className="fa fa-headset fa-4x text-success"></i>
                     <h4>{allproduct} - Orders Recived</h4>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}

export default Mydashboard;