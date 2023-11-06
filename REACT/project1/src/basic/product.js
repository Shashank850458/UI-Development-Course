
const Myproduct =() => {
    let allproduct =[
        {name: "Apple",price:300,qty:10,seller:"Sumit"},
        {name: "Mango",price:200,qty:5,seller:"Ganesh"},
        {name: "Orange",price:100,qty:10,seller:"Raj"},
        {name: "Banana",price:50,qty:5,seller:"Mukesh"},
        {name: "Milk",price:40,qty:3,seller:"Amit"}
        
    ];

    return (
        <div>
            <h1> Product List: {allproduct.length}</h1>
            <table id="datalist">
            <thead>
                <tr>
                    <th>S1 No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                    <th>Seller</th>
                </tr>
                </thead>
                <tbody>
                    {
                        allproduct.map((product,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.price * product.qty}</td>
                                    <td>{product.seller}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
           

            </table>
        </div>
    )
}
export default Myproduct;