import { useState, useEffect } from "react";
import swal from "sweetalert";

const Mycart =() =>{
    let[allproduct,updateProduct]=useState([]);

    const getproduct =() =>{
        fetch("http://localhost:1234/cart")
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse() );
        })
    }
    useEffect(()=>{
        getproduct();
    },[1]);

    const delitem =(pid) =>{
        let url = "http://localhost:1234/cart/" + pid;
        let postdata ={'method':'delete'};
        fetch(url,postdata)
        .then(response=>response.json())
        .then(emptyres=>{
            swal("Deleted" , "Item Deleted from cart", "success");
            getproduct(); //reload list after delete
        })
    }  

    const qtyplus =(pinfo,status) =>{
        if(status =='A')
        {
            pinfo["qty"] = pinfo.qty+1;
        }else{
            pinfo["qty"] = pinfo.qty-1;
        }

        if(pinfo.qty == 0)
        {
            delitem(pinfo.id); //delete the item from cart if quantity become 0
        }else{
            let url = "http://localhost:1234/cart/" + pinfo.id;
            let postData = {
                headers:{'Content-Type': 'application/json'},
                method:'PUT',
                body: JSON.stringify(pinfo)
            }
            fetch(url, postData)
            .then(response => response.json())
            .then(serres =>{
                getproduct();
            })
        }
    }

    let total = 0;

    let[fullname,pickName] =useState("");
    let[mobileno,pickMobile] =useState("");
    let[emailid,pickEmail] =useState("");
    let[address,pickAddress]=useState("");

    const placeorder =()=>{
        let url= "http://localhost:1234/order"
        let orderData = {
            customer:fullname,
            mobile:mobileno,
            email:emailid,
            address:address,
            itemlist:allproduct
        };
        let postData = {
            headers:{'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(orderData)
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(info=>{
            swal("Hi,"+ fullname,"We have recived your order","success");
            pickName("");pickMobile("");pickEmail("");pickAddress("");
        })
    }


    return (
        <div className="container mt-4">
             <div className="row">
                  <div className="col-lg-12">
                     <h2 className="text-center text-primary">{allproduct.length} : Items in My Cart</h2>
                  </div>
             </div>
             <div className="row mt-4">
                   <div className="col-lg-4">
                     <div className="p-4 border">
                        <h3>Customer Details</h3>
                        <div className="mb-3">
                            <label>Full Name</label>
                            <input type="text" className="form-control"
                                onChange={obj=>pickName(obj.target.value)}
                                value={fullname}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Mobile Number</label>
                            <input type="number" className="form-control"
                                 onChange={obj=>pickMobile(obj.target.value)}
                                value={mobileno}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email Id</label>
                            <input type="email" className="form-control"
                                 onChange={obj=>pickEmail(obj.target.value)}
                                value={emailid}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Delivery Address</label>
                            <textarea className="form-control"
                             onChange={obj=>pickAddress(obj.target.value)}
                                value={address}></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={placeorder}>Place Order</button>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-8">
                       <table className="table table-bordered">
                           <thead>
                              <tr>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Photo</th>
                                <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                allproduct.map((product,index)=>{
                                    total = total + product.price * product.qty;

                                    return(
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td className="input-group">
                                               <button className="btn btn-warning btn-sm"
                                               onClick={qtyplus.bind(this,product,'B')}> - </button>
                                               <input type="text" value={product.qty} readOnly/>
                                               <button className="btn btn-primary btn-sm"
                                                onClick={qtyplus.bind(this,product,'A')}> + </button>
                                            </td>
                                            <td>{product.price * product.qty}</td>
                                            <td> <img src={product.photo} height="50" width="50"/> </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={delitem.bind(this,product.id)}>
                                                    <i  className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                              }
                           </tbody>
                       </table>
                       <p className="text-center"> Total Amout  to Pay <b>Rs.{total} </b></p>
                   </div>
             </div>
        </div>
    )
}

export default Mycart;
