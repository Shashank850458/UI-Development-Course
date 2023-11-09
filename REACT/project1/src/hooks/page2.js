import { useState } from "react";

const Myhook2 =() =>{
     let [product,updateProduct] = useState("Red Apple");
     let[price,updatePrice] = useState(300);
     let[qty,updateQty] = useState(10);

     const one=() => {
        updateQty(qty+1);
     }
     const two=() => {
        updatePrice(price+5);
     }

     return(
        <div>
            <h1> How To Update State variable </h1>
            <p> Product Name: {product}</p>
            <p> Product Price: {price}</p>
            <p>Quantity: {qty}</p>
            <p>Total Cost: {price * qty}</p>
            <button onClick={one}>+1 Quantity</button>
            <button onClick={two}>+ 5 In Price</button>
        </div>
     )
}

export default Myhook2;