import { useState,useEffect} from "react";
import swal from "sweetalert";


const Newproduct =() =>{
    let[pname,pickName] =useState("");
    let[pprice,pickPrice] =useState("");
    let[pphoto,pickPhoto] =useState("");
    let[pdetails,pickDetails] =useState("");

    const save=()=>{
        let url="http://localhost:1234/product";
        let productdata={
            name:pname,
            price:pprice
            ,photo:pphoto,
            details:pdetails,
            seller:localStorage.getItem("id")
        };
        let postdata={
            headers:{'content-type':'application/json'},
            method:"POST",
            body:JSON.stringify(productdata)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(pdetails=>{
            swal(pname, "Save Successfully ...", "success");
            pickName(""); pickPrice("");pickDetails("");pickPhoto("");
        })
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3 className="text-primary">Add New Product</h3>
                </div>
                <div className="col-lg-4 mb-4">
                    <label>Enter Product Name</label>
                    <input type="text" className="form-control"
                         onChange={obj=>pickName(obj.target.value)} value={pname}
                    />
                </div>
                <div className="col-lg-4 mb-4">
                    <label>Enter Product Price</label>
                    <input type="text" className="form-control" 
                    onChange={obj=>pickPrice(obj.target.value)} value={pprice}/>
                </div>
                <div className="col-lg-4 mb-4">
                    <label>Enter Photo URL</label>
                    <input type="text" className="form-control"
                         onChange={obj=>pickPhoto(obj.target.value)} value={pphoto}
                    />
                </div>
                
                <div className="col-lg-12 mb-4">
                    <label>Enter Product Details</label>
                  <textarea className="form-control"
                   onChange={obj=>pickDetails(obj.target.value)} value={pdetails}></textarea>
                </div>
                <div className="col-lg-12 text-center">
                   <br/> <br/>
                    <button className="btn btn-danger" onClick={save}>Save Product</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;