const Myitem = () => {
    let item=[
        {code:111,name: 'Pencil',category: 'Stationary',unit:5,price:8},
        {code:222,name: 'Pen',category: 'Stationary',unit:8,price:10},
        {code:333,name: 'Notebook',category: 'Stationary',unit:10,price:20},
        {code:444,name: 'Shoes',category: 'Footwear',unit:800,price:1000},
        {code:555,name: 'Apple',category: 'Fruits',unit:150,price:180},
        {code:666,name: 'Tomato',category: 'Vegetables',unit:80,price:100}
    ];

    return(
        <div className="home">
            <h1>Item List:{item.length}</h1>
            <table id="datalist">
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>Item_Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Unit_Price</th>
                        <th>Sales_Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      item.map((item,index) =>{
                        return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.price}</td>
                                </tr>
                        )    
                        })
                        
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Myitem;