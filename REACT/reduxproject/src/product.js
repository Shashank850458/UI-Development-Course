import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Myproduct = () =>{
    let[pname, pickName] = useState("");
    let[pprice, pickPrice] = useState("");
    let[pqty, pickQty] = useState("");

    const dispatch = useDispatch();

    const save = () =>{
        let pdata = { type:"addproduct", pinfo:{name:pname, price:pprice, qty:pqty} };
        dispatch(pdata);
        pickName("");
        pickPrice("");
        pickQty("");
    }

    const delproduct = (index) =>{
        let pdata = { type:"removeproduct", pindex:index };
        dispatch(pdata);
    }

    const allproduct = useSelector( state=>state.Productlist );

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h3 className='text-primary'> 
                        Manage Product : {allproduct.length} 
                    </h3>
                    <p>
                        <input type="text" className='m-3' placeholder='Name'
                        onChange={obj=>pickName(obj.target.value)} value={pname}/>

                        <input type="text" className='m-3' placeholder='Price'
                        onChange={obj=>pickPrice(obj.target.value)} value={pprice}/>

                        <input type="text" className='m-3' placeholder='Quantity'
                        onChange={obj=>pickQty(obj.target.value)} value={pqty}/>

                        <button onClick={save} className='btn btn-primary'>Save</button>
                    </p>
                </div>
            </div>

            <div className='row mt-5'>
                {
                    allproduct.map((product, index)=>{
                        return(
                            <div className='col-lg-3 mb-4' key={index}>
                                <h5> {product.name} </h5>
                                <p> Rs.{product.price}</p>
                                <p> Stock {product.qty}</p>
                                <button 
                                    className='btn btn-danger btn-sm' 
                                    onClick={delproduct.bind(this, index)}> Delete 
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myproduct;