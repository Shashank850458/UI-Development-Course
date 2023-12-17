import { useState,useEffect} from "react";
import swal from "sweetalert";

const Myproduct =() =>{
    let[allproduct,updateProduct]=useState([]);

    let sid= localStorage.getItem("id"); //get seller id from localStorage.

    const getproduct =() =>{
        fetch("http://localhost:1234/product?seller="+sid)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }
    useEffect(()=>{
        getproduct();
    },[1]);

    const delproduct = (pid)=>{
        let url="http://localhost:1234/product/"+pid;
        let postdata ={method:"delete"}
        fetch(url,postdata)
        .then(response=>response.json())
        .then(emptyres=>{
            swal("Deleted", "Product Details Deleted", "success");
            getproduct();
        })
    }
    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="text-primary">
                    Management Product:{allproduct.length}
                    </h3>
                    <table className="mt-4 table table-borderd shadow-lg rounded text-start">
                        <thead>
                            <tr>
                                <th>Pid</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product,index)=>{
                                    return(
                                        <tr key={index}>
                                           <td>{product.id}</td>
                                           <td>{product.name}</td>
                                           <td>Rs.{product.price}</td>
                                           <td>{product.details}</td>
                                           <td> <img src={product.photo} height="40" width="40"/> </td>
                                           <td>
                                              <button className="btn btn-danger btn-sm"
                                              onClick={delproduct.bind(this, product.id)}>
                                                <i className="fa fa-trash"></i>
                                              </button>
                                            </td>
                                        </tr>
                                    )
                              
                                })
                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myproduct;